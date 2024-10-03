import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	"/": [
		"",
		{
			text: "Articles",
			icon: "book",
			prefix: "posts/",
			children: "structure",
		},
		{
			text: "Recordings",
			icon: "video",
			prefix: "videos/",
			children: "structure",
		},
	],
});
