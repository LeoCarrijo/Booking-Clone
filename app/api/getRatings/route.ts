import * as cheerio from "cheerio";
import { getBaseHTML } from "../route";
import { type NextRequest, NextResponse } from "next/server";

async function getRatings(url: string) {
	const $ = cheerio.load(await getBaseHTML(url));
	const ratings: string[] = [];
	$(".d86cee9b25 > .ac4a7896c7").each((i, e) => {
		ratings.push($(e).text().trim().slice(7, 10));
	});
	return ratings;
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is requires" }, { status: 400 });
	}
	const ratings = await getRatings(url);
	return NextResponse.json(ratings);
}
