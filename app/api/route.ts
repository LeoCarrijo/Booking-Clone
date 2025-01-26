import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function getBaseHTML(url: string) {
	const response = await fetch(`http://localhost:3000/api?url=${url}`);
	const { html } = await response.json();
	return html;
}

async function fetchData(url: string) {
	const response = await axios.get(url);
	return response.data;
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}
	const content = await fetchData(url);
	const $ = cheerio.load(content);
	return NextResponse.json({
		html: $("body").html(),
	});
}
