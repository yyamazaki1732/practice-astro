/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  purge: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // ===============================================
    // # extend
    // ===============================================
    extend: {
      screens: {
        sm: "520px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },

      // ===============================================
      // # themeの具体例
      // ===============================================
      spacing: {
        small: "10px",
        medium: "20px",
      },
      padding: ({ theme }) => ({
        btnSmall: theme("spacing.small"),
        btnMedium: theme("spacing.medium"),
      }),
      backgroundSize: ({ theme }) => ({
        auto: "auto",
        cover: "cover",
        contain: "contain",
        ...theme("spacing"),
      }),
      // p-fv__pic > imgに適用
      // ===============================================
    },
    // ===============================================
    // # override
    // ===============================================
    fontFamily: {
      primary: [
        "メイリオ",
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "Meiryo",
        "MS Ｐゴシック",
        "MS PGothic",
        "sans-serif",
        "YuGothic",
        "Yu Gothic",
      ],
      secondary: ["serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        100: "#FFFBEA",
        200: "#FFF4CB",
        300: "#FFEFAA",
        400: "#FFE88B",
        500: "#FFE274",
        600: "#FDDD5F",
        700: "#EDCC5A",
        800: "#D7B653",
        900: "#C1A14E",
      },
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "160%"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
