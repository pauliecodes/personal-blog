/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Lora', 'serif'],
                mono: ['Fira Code', 'monospace'],
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': '#2d3748',
                        '--tw-prose-headings': '#1a202c',
                        '--tw-prose-links': '#1a202c',
                        maxWidth: '65ch',
                        lineHeight: '1.8',
                        p: {
                            marginTop: '1.5em',
                            marginBottom: '1.5em',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}