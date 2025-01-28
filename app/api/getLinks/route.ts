import * as cheerio from "cheerio";
import { getBaseHTML } from "../route";
import { type NextRequest, NextResponse } from "next/server";

async function getLinks(url: string) {
	const $ = cheerio.load(await getBaseHTML(url));
	const links: string[] = [];
	$(".a3f1b35606 > a").each((i, e) => {
		links.push($(e).attr("href") as string);
	});
	return links;
}
export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}
	const links = await getLinks(url);
	return NextResponse.json(links);
}
