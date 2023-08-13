/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				tablet: '520px',
				laptop: '960px',
				desktop: '1024px'
			},
			colors: {
				textBody: '#1A1A1C',
				textDescription: '#626264',
				textPlaceholder: '#757578',
				bgPrimary: '#FFFFFF',
				bgSecondary: '#F1F1F4',
				bgTertiary: '#F8F8FB',
				borderField: '#1A1A1C',
				borderDivider: '#D8D8DB',
				primary: '#2563EB',
				disabled: '#949497'
			},
			fontSize: {
				'heading-1': ['32px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				'heading-2': ['28px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				'heading-3': ['24px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				'heading-4': ['20px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				'heading-5': ['16px', { lineHeight: 1.7, letterSpacing: '0.04em' }],
				body: ['16px', { lineHeight: 1.7, letterSpacing: '0.04em' }],
				'body-sm': ['14px', { lineHeight: 1.7, letterSpacing: '0.04em' }],
				label: ['14px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				'label-sm': ['12px', { lineHeight: 1.5, letterSpacing: '0.04em' }],
				desc: ['12px', { lineHeight: 1.7, letterSpacing: '0.04em' }],
				'desc-sm': ['10px', { lineHeight: 1.7, letterSpacing: '0.04em' }]
			}
		}
	},
	plugins: []
};
