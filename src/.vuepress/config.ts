import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "en-US",
	title: "ChatGPT Skyguide",
	description: "A guide to using ChatGPT to help you work smarter.",

	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});
