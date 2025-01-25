import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { getBaseHTML } from "../route";

export async function getAllNames() {
	const $ = cheerio.load(await getBaseHTML());
	const allNames: string[] = [];
	$(".gallerytext > p > a").each((i, e) => {
		allNames.push($(e).text());
	});
	return allNames;
}

export async function GET() {
	const allNames = await getAllNames();
	const namesObject = allNames.reduce(
		(acc, name) => {
			acc[name] = name;
			return acc;
		},
		{} as { [key: string]: string },
	);

	return NextResponse.json(namesObject);
}
