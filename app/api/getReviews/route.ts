import * as cheerio from "cheerio";
import { getBaseHTML } from "../route";
import { type NextRequest, NextResponse } from "next/server";

async function getReviews(url: string) {
	const $ = cheerio.load(await getBaseHTML(url));
	const reviews: string[] = [];
	$(".d935416c47").each((i, e) => {
		reviews.push($(e).text());
	});
	return reviews;
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}
	const reviews = await getReviews(url);
	return NextResponse.json(reviews);
}
