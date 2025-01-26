import * as cheerio from "cheerio";
import { getBaseHTML } from "../route";
import { type NextRequest, NextResponse } from "next/server";

async function getTiers(url: string) {
	const $ = cheerio.load(await getBaseHTML(url));
	const tiers: string[] = [];
	$(".cb2cbb3ccb").each((i, e) => {
		tiers.push($(e).text());
	});
	return tiers;
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}
	const tiers = await getTiers(url);
	return NextResponse.json(tiers);
}
