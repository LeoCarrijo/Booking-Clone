import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { getBaseHTML } from "../route";

async function getTitles() {
	const $ = cheerio.load(await getBaseHTML());
	const titles: string[] = [];
	$(".a15b38c233").each((i, e) => {
		titles.push($(e).text());
	});
	return titles;
}

export async function GET() {
	const titles = await getTitles();
	return NextResponse.json(titles);
}
