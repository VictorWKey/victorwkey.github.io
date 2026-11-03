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
				night: {
					canvas: '#10151e',
					section: '#141c28',
					surface: '#1b2635',
					raised: '#253449',
					line: '#3a4a61',
					muted: '#a9b7ca',
					body: '#d5deeb',
					heading: '#f3f6fc',
					accent: '#8bbcff',
					'accent-hover': '#b6d5ff',
					'on-accent': '#101c2d',
				},
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
			},
			animation: {
				'fade-in': 'fadeIn 0.15s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [],
}
