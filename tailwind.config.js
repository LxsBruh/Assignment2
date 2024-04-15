/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./templates/*.html',
		'./templates/*.twig',
		'./templates/partial/*.twig',
		'./templates/blocks/*.twig',
		// Add paths to your Twig templates or any files using Tailwind classes
	],
	theme: {
		extend: {
			colors: {
				primary: '#a78bfa', // Add your custom primary color
				secondary: '#a78bfa', // Add your custom secondary color
				debug: '#6B7280', // Just so you can see how this is powerful
				// Add more custom colors as needed
			},
			fontFamily: {
				//font files are declared in html-header.twig file
				'oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
				'sans': ['Didact Gothic', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [],
}

