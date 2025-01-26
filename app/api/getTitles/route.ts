import * as cheerio from "cheerio";
import { type NextRequest, NextResponse } from "next/server";
import { getBaseHTML } from "../route";

async function getTitles(url: string) {
	const $ = cheerio.load(await getBaseHTML(url));
	const titles: string[] = [];
	$(".a15b38c233").each((i, e) => {
		titles.push($(e).text());
	});
	return titles;
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}
	const titles = await getTitles(url);
	return NextResponse.json(titles);
}
