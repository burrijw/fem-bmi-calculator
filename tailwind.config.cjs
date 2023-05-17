const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            blue: "#345FF6",
            "blue-alpha": "hsla(227, 92%, 58%, 0.15)",
            metal: {
                800: "#253347",
                600: "#5E6E85",
                200: "#D8E2E7",
            },
        },
        backgroundImage: {
            "accent-gradient":
                "linear-gradient(290.1deg, #D6E6FE 0%, rgba(214, 252, 254, 0) 100%)",
            "result-gradient":
                "linear-gradient(90deg, #345FF7 0%, #587DFF 100%)",
        },
        fontFamily: {
            sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        },
        data: {
            checked: "state='checked'",
            unchecked: "state='unchecked'",
        },
        extend: {
            // prettier-ignore
            fontSize: {
        "body-sm":    [".875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md":    ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.1", fontWeight: "600" }],
        "heading-md": ["1.5rem",  { lineHeight: "1.1", fontWeight: "600" }],
        "heading-lg": ["3rem",    { lineHeight: "1.1", fontWeight: "600" }],
        "heading-xl": ["4rem",    { lineHeight: "1.1", fontWeight: "600" }],
      },
            borderRadius: {
                accent: "35px",
                bullet: "1rem 3.75rem 3.75rem 1rem",
            },
            boxShadow: {
                accent: "16px 32px 56px rgba(143, 174, 207, 0.25)",
            },
        },
    },
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/forms"),
    ],
};
