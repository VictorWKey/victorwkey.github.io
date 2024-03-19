/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}',
						'./public/**/*.{svg, html}'],
	theme: {
		extend: {
			fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
				'onest': ['Onest', 'sans-serif']
      },
			colors: {
				primary: {
					DEFAULT: '#68d391'
				}
			}
		},
	},
	plugins: [],
}
