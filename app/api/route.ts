import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function getBaseHTML() {
	const response = await fetch("http://localhost:3000/api");
	const { html } = await response.json();
	return html;
}

async function fetchData(url: string) {
	const response = await axios.get(url);
	return response.data;
}

export async function GET() {
	const content = await fetchData("https://stardewvalleywiki.com/Villagers");
	const $ = cheerio.load(content);

	return NextResponse.json({
		html: $("body").html(),
	});
}
