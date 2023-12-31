/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				fadeInDown: {
					'0%': { transform: 'translateY(-30px)', opacity: '0' },
					'100%': { transform: 'translateY(0px)', opacity: '1' }
				}
			},
			animation: {
				fadeInDown: 'fadeInDown 0.25s forwards'
			},
			screens: {
				tablet: '520px',
				laptop: '960px',
				desktop: '1024px'
			},
			colors: {
				body: '#1A1A1C',
				lightBody: '#ADB5BD',
				link: '#0f83fd',
				description: '#626264',
				placeholder: '#757578',
				bgPrimary: '#FFFFFF',
				bgSecondary: '#F1F1F4',
				bgTertiary: '#F8F8FB',
				field: '#1A1A1C',
				divider: '#D8D8DB',
				primary: 'rgba(30, 64, 175, 0.9)',
				disabled: '#949497',
				lightPrimary: '#212529',
				lightSecondary: '#2b3035',
				lightTertiary: '#F6F8F9',
				lightWhite: '#F5F5F5'
			},
			fontSize: {
				'heading-1': ['28px', { lineHeight: 1.5, fontWeight: 700, letterSpacing: '0.04em' }],
				'heading-2': ['24px', { lineHeight: 1.5, fontWeight: 700, letterSpacing: '0.04em' }],
				'heading-3': ['20px', { lineHeight: 1.5, fontWeight: 700, letterSpacing: '0.04em' }],
				'heading-4': ['16px', { lineHeight: 1.7, fontWeight: 700, letterSpacing: '0.04em' }],
				title: ['32px', { lineHeight: 1.5, fontWeight: 700, letterSpacing: '0.04em' }],
				subtitle: ['20px', { lineHeight: 1.5, fontWeight: 700, letterSpacing: '0.04em' }],
				body: ['16px', { lineHeight: 1.7, letterSpacing: '0.04em' }],
				'body-sm': ['14px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				label: ['14px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				'label-sm': ['12px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				caption: ['12px', { lineHeight: 1.7, letterSpacing: '0.04em' }],
				'caption-sm': ['10px', { lineHeight: 1.7, letterSpacing: '0.04em' }]
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
