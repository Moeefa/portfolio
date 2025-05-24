// Add these animation definitions to your existing tailwind config
module.exports = {
	// ...existing config
	theme: {
		extend: {
			// ...existing extensions
			animation: {
				"cloud-slow": "cloud-movement-slow 30s linear infinite",
				"cloud-fast": "cloud-movement-fast 20s linear infinite",
			},
			keyframes: {
				"cloud-movement-slow": {
					"0%": { transform: "translateX(-20px)" },
					"100%": { transform: "translateX(400px)" },
				},
				"cloud-movement-fast": {
					"0%": { transform: "translateX(-15px)" },
					"100%": { transform: "translateX(400px)" },
				},
			},
		},
	},
	// ...existing config
};
