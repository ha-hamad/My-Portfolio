/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                gradient: 'gradient 4s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0% 50%' },
                },
            },
            backgroundSize: {
                'gradient-size': '200% 200%',
            },
        },
    },
    plugins: [],
} 