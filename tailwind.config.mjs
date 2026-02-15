/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}',
						'./public/**/*.{svg, html}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Onest', 'system-ui', 'sans-serif'],
				'onest': ['Onest', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: '#2563eb',
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				}
			}
		},
	},
	plugins: [],
}
