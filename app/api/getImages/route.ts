import * as cheerio from "cheerio";
import { type NextRequest, NextResponse } from "next/server";
import { getBaseHTML } from "../route";

async function getImages(url: string) {
	const $ = cheerio.load(await getBaseHTML(url));
	const images: string[] = [];
	$(".f9671d49b1").each((i, e) => {
		images.push(`${$(e).attr("src")}`);
	});
	return images;
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}
	const images = await getImages(url);
	return NextResponse.json(images);
}
