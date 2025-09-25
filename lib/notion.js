import { Client } from "@notionhq/client";

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

const HEX32 = /^[0-9a-f]{32}$/i;
const UUID36 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function addDashes(id32) {
    return `${id32.slice(0, 8)}-${id32.slice(8, 12)}-${id32.slice(12, 16)}-${id32.slice(16, 20)}-${id32.slice(20)}`;
}

const notion = new Client({ auth: process.env.NOTION_TOKEN })

const dbId = process.env.NOTION_DATABASE_ID


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
        database_id: dbId,
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

        return {
            id: plain(props.WorksId?.rich_text) || p.id.replace(/-/g, ""),
            title,
            coverImage: firstImageUrl(props.Image?.files) ?? null,
        }
    })
}

export async function getDesignProjects(locale = "en") {
    const response = await notion.databases.query({
        database_id: dbId,
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

// Note: avoid running database queries at module top-level to prevent
// unnecessary API calls during import and build time.


export async function getWebsProjectById(slug, locale = "en") {
    const response = await notion.databases.query({
        database_id: dbId,
        filter: {
            and: [
                { property: "Published", checkbox: { equals: true } },
                { property: "Type", select: { equals: "web" } },
                { property: "WorksId", rich_text: { equals: slug } }, // ✅ 슬러그 매칭
            ],
        },
        page_size: 1,
    });

    const page = response.results[0];
    if (!page) return null;

    const props = page.properties || {};

    const description =
        getText(props[`Description_${locale}`]) || "";

    const tagsArr =
        (props[`Tags_${locale}`]?.multi_select ??
            props.Tags?.multi_select ??
            []).map((t) => t.name);

    return {
        id: plain(props.WorksId?.rich_text) || page.id.replace(/-/g, ""),
        title: getText(props[`Title_${locale}`]) || getText(props.Title) || "untitled",
        description,
        adminT: getText(props[`Ft1_${locale}`]) || "",
        clientT: getText(props[`Ft2_${locale}`]) || "",
        goalT: getText(props[`Ft3_${locale}`]) || "",
        admin: getText(props[`Admin_${locale}`]) || "",
        client: getText(props[`Client_${locale}`]) || "",
        goal: getText(props[`Goal_${locale}`]) || "",
        tags: tagsArr,
        allImages: allImageUrls(props.Image?.files) ?? [],
        startDate: props.StartDate?.date?.start ?? null,
        endDate: props.EndDate?.date?.end ?? null,
        companyName: props.Company_name?.rich_text ?? null,
        link1: props.Link?.url ?? null,
        link2: props.VercelURL?.url ?? null,
    };
}

