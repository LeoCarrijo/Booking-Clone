import * as cheerio from "cheerio";
import { getBaseHTML } from "../route";
import { NextResponse } from "next/server";
import { getAllNames } from "../getAllNames/route";

async function getAllAvatars() {
	const $ = cheerio.load(await getBaseHTML());
	const allAvatars: string[] = [];
	$(".gallerybox > div > .thumb > div > a > img").each((i, e) => {
		const avatar = `https://stardewvalleywiki.com/${$(e).attr("src")}`;
		allAvatars.push(avatar);
	});
	return allAvatars;
}

export async function GET() {
	const allAvatars = await getAllAvatars();
	const allNames = await getAllNames();
	const avatarsObject = allAvatars.reduce(
		(acc, avatar, name) => {
			acc[allNames[name]] = avatar;
			return acc;
		},
		{} as { [key: string]: string },
	);
	return NextResponse.json(avatarsObject);
}
