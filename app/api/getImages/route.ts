import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { getBaseHTML } from "../route";

async function getImages() {
	const $ = cheerio.load(
		await getBaseHTML(
			"https://www.booking.com/searchresults.html?ss=Salvador&group_adults=3&group_children=0&no_rooms=1&checkin=2025-2-11&checkout=2025-2-13",
		),
	);
	const images: string[] = [];
	$(".f9671d49b1").each((i, e) => {
		images.push(`${$(e).attr("src")}`);
	});
	return images;
}

export async function GET() {
	const images = await getImages();
	return NextResponse.json(images);
}
