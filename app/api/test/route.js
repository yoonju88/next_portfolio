import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET() {
    try {
        const res = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            page_size: 1,
        });
        return NextResponse.json({ ok: true, data: res.results });
    } catch (err) {
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}