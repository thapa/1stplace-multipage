/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*/*.html"],
  theme: {
    fontFamily: {
      sans: "noto-sans, sans-serif",
    },
    extend: {
      container: {
        padding: "20px",
      },
      colors: {
        // Brand Colors
        "brand-accent": "#E6001B",
        "brand-dark": "#070807",
        "brand-d-grey": "#3F3F3F",
        "brand-m-grey": "#8E8E8E",
        "brand-l-grey": "#D6D6D6",

        // School Colors

        "school-1": "#315147",
        "school-2": "#FFDB00",
        "school-3": "#778E87",

        // Global Colors

        "global-1": "#1AA800",
        "global-2": "#E6001B",
        "global-l-grey": "#F2F2F2",
        "global-dark": "#070807",
      },
      fontFamily: {
        Noto: '"noto-sans", sans-serif',
        "Noto-condensed": '"noto-sans-condensed", sans-serif',
        "Noto-extra-condensed": '"noto-sans-extracondensed", sans-serif',
      },
      maxWidth: {
        main: "1460px",
        narrow: "1160px",
      },
      backgroundImage: {
        checkmark: "url('/images/check-icon.svg')",
        "checkmark-black": "url('/images/check-icon-black.svg')",
      },
      fontSize: {
        "size-1": "76px",
        "size-2": "64px",
        "size-3": "52px",
        "size-4": "48px",
        "size-5": "30px",
        "size-6": "24px",
        base: "20px",
        sm: "18px",
        xs: "14px",
        xxs: "12px",
      },
    },
  },
  plugins: [],
};
