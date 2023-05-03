/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./build/*.html"
    ],
    theme: {
        fontFamily: {
            sans: "proxima-nova, sans-serif"
        },
        extend: {
            container: {
                padding: '30px'
            },
            colors: {
                'accent': '#FFDB00',
                'accent-2': '#1AA800',
                'accent-3': '#315147',
                'button': "#315147",
                'media': "#F2F2F2"
            },
            fontFamily: {
                'Proxima': "proxima-nova, sans-serif",
                'Noto': "'Noto Sans', sans-serif",
                'Orbitron': "'Orbitron', sans-serif",
                'Proxima-condensed': 'proxima-nova-condensed, sans-serif;'
            },
            maxWidth: {
                'narrow': '1400px'
            },
            backgroundImage: {
                'checkmark': "url('/build/images/check-icon.svg')"
            },
            fontSize: {
                xxs: '12px',
                xs: '15px',
                sm: '20px',
                md: '30px',
                lg: '40px',
                xl: '50px'
            }
        },
    },
    plugins: [],
}