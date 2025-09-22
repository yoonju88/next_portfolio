import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function getDatabase(id) {
    const response = await notion.databases.query({
        database_id: databaseId,
    })
    return response.results
}

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