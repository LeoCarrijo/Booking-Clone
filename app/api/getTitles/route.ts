import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { getBaseHTML } from "../route";

async function getTitles() {
	const $ = cheerio.load(
		await getBaseHTML(
			"https://www.booking.com/searchresults.html?ss=Salvador&group_adults=3&group_children=0&no_rooms=1&checkin=2025-2-11&checkout=2025-2-13",
		),
	);
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
