import { Client } from "@notionhq/client";
import { Equal } from "lucide-react";

/* test connection
async function main() {
    try {
        const res = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID
        })
        console.log("connection ok", res.results[0])
    } catch (err) {
        console.error('connection notion failed', err)
    }
}
*/

const notion = new Client({ auth: process.env.NOTION_TOKEN })


function plain(rich = []) {
    return rich.map(r => r.plain_text ?? "").join("");
}

function getText(p) {
    if (!p) return "";
    if (p.type === "title") return plain(p.title);
    if (p.type === "rich_text") return plain(p.rich_text);
    return "";
}

function firstImageUrl(files = []) {
    if (!files.length) return undefined;
    const f = files[0]
    if (f.type === "file") return f.file?.url;
    if (f.type === "external") return f.external?.url;
    return undefined;
}

function allImageUrls(files = []) {
    return (files ?? [])
        .map((f) => (f.type === "file" ? f.file?.url : f.type === "external" ? f.external?.url : null))
        .filter(Boolean);
}


export async function getWebProjects(locale = "en") {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            and: [
                {
                    property: "Published",
                    checkbox: { equals: true },
                },
                {
                    property: "Type",
                    select: { equals: "web" },
                },
            ],
        },
        sorts: [{ property: "StartDate", direction: "descending" }],
        page_size: 50,
    })
    return response.results.map((p) => {
        const props = p.properties || {};

        // 다국어 컬럼 우선, 폴백까지
        const title =
            getText(props[`Title_${locale}`]) ||
            getText(props.Title) ||
            "untitled";

        const description =
            getText(props[`Description_${locale}`]) || "";

        // 태그: 언어별 Tags_{locale}가 있으면 우선, 없으면 공용 Tags
        const tagsArr =
            (props[`Tags_${locale}`]?.multi_select ??
                props.Tags?.multi_select ??
                []
            ).map((t) => t.name);

        return {
            id: plain(props.WorksId?.rich_text) || p.id.replace(/-/g, ""),
            title,
            description,
            tags: tagsArr,
            link: props.Link.url ?? null,
            startDate: props.StartDate?.date?.start ?? null,
            endDate: props.StartDate?.date?.end ?? null,
            coverImage: firstImageUrl(props.Image?.files) ?? null,
            allImages: allImageUrls(props.Image?.files),
        }
    })
}

export async function getDesignProjects(locale = "en") {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            and: [
                {
                    property: "Published",
                    checkbox: { equals: true },
                },
                {
                    property: "Type",
                    select: { equals: "design" },
                },
            ],
        },
        sorts: [{ property: "StartDate", direction: "descending" }],
        page_size: 50,
    })
    return response.results.map((p) => {
        const props = p.properties || {};

        // 다국어 컬럼 우선, 폴백까지
        const title =
            getText(props[`Title_${locale}`]) ||
            getText(props.Title) ||
            "untitled";

        const description =
            getText(props[`Description_${locale}`]) || "";

        // 태그: 언어별 Tags_{locale}가 있으면 우선, 없으면 공용 Tags
        const tagsArr =
            (props[`Tags_${locale}`]?.multi_select ??
                props.Tags?.multi_select ??
                []
            ).map((t) => t.name);
        const duration = getText(props[`Duration_${locale}`]) || ""

        return {
            id: plain(props.WorksId?.rich_text) || p.id.replace(/-/g, ""),
            category: props.Type?.select?.name ?? null,
            title,
            description,
            tags: tagsArr,
            duration,
            companyName: getText(props.Company_name) ?? null,
            coverImage: firstImageUrl(props.Image?.files) ?? null,
            allImages: allImageUrls(props.Image?.files),
        }
    })
}

