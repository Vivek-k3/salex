/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "grey-100": "#9D9D9D",
                "grey-150": "#999999",
                "grey-200": "#333333",
                "grey-250": "#f9f9f9",
            },
        },
    },
    plugins: [],
};
