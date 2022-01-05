module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				main: "#FFD700",
			},
			boxShadow: {
				card: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
