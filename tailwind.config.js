/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ['class', 'class'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				btn: {
					'1': 'hsl(var(--btn-1))',
					'2': 'hsl(var(--btn-2))',
					'3': 'hsl(var(--btn-3))',
					'4': 'hsl(var(--btn-4))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundSize: {
				'300%': '300% 300%',
			},
			keyframes: {
				'accordion-down': {           // (기존)
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {             // (기존)
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				/* 배경 애니메이션 */
				float: {
					'0%, 100%': { transform: 'translateY(0) scale(1)' },
					'50%': { transform: 'translateY(-12px) scale(1.02)' }
				},
				drift: {
					'0%': { transform: 'translate(0,0) rotate(0deg)' },
					'50%': { transform: 'translate(8px,-8px) rotate(3deg)' },
					'100%': { transform: 'translate(0,0) rotate(0deg)' }
				},
				gradientShift: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				float: 'float 6s ease-in-out infinite',
				drift: 'drift 10s ease-in-out infinite',
				gradient: 'gradientShift 12s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require('tailwindcss-text-stroke')],
};
