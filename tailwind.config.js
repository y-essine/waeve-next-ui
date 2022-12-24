/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: '#201e2d',
                secondary: '#2a2839',
                tertiary: '#12111B',
                accent: '#F87171',
                'primary-t': '#cbd5e1',
                'secondary-t': '#A29CDE',
                'tertiary-t': '#5a567c'
            },
            screens: {
                smd: '880px',
                sm: '640px',
                xs: '560px',
                '2xs': '425px'
            },
            transitionProperty: {
                w: 'width'
            }
        }
    },
    plugins: [require('daisyui')],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: '',
        darkTheme: 'dark'
    }
};
