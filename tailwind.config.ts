// tailwind.config.js
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './components/ui/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-haffer)', 'sans-serif'],
            },
            backgroundImage: {
                'divider-gradient':
                    'linear-gradient(180deg, rgba(42,123,155,0) 0%, rgba(0,0,0,0.39) 9%, rgba(0,0,0,0.56) 14%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 67%, rgba(0,0,0,0.61) 83%, rgba(0,0,0,0.34) 91%, rgba(237,221,83,0) 100%)',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'marquee-vertical': {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                'rotate-in': {
                    '0%': { transform: 'rotate(-5deg)', opacity: '0' },
                    '100%': { transform: 'rotate(0deg)', opacity: '1' },
                },
            },
            animation: {
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
                'rotate-in': 'rotate-in 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
};
