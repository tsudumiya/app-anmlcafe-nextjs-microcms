/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                    '@screen xl': {
                        //maxWidth: '1280px',
                        maxWidth: '1024px',
                    },
                    '@screen 2xl': {
                        //maxWidth: '1536px',
                        maxWidth: '1024px',
                    },
                },
            });
        },
    ],
};
