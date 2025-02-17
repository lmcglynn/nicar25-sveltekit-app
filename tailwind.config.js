const { join } = require('path');

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio')
	]
};

module.exports = config;
