import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { getBaseHTML } from "../route";

async function getImages() {
	const $ = cheerio.load(await getBaseHTML());
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
