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
      spacing: {
        6: "1.5rem", // 24px
        6.5: "1.625rem", // 26px
        8: "2rem", // 32px
        8.5: "2.125rem", // 34px
        10: "2.5rem", // 40px
        10.5: "2.625rem", // 42px
        12: "3rem", // 48px
        12.5: "3.125rem", // 50px
        14: "3.5rem", // 56px
        14.5: "3.625rem", // 58px
        16: "4rem", // 64px
        16.5: "4.125rem", // 66px
        18: "4.5rem", // 72px
        18.5: "4.625rem", // 74px
        22: "5.5rem", // 88px
        22.5: "5.625rem", // 90px
        26: "6.5rem", // 104px
        26.5: "6.625rem", // 106px
        30: "7.5rem", // 120px
        30.5: "7.625rem", // 122px
        34: "8.5rem", // 136px
        34.5: "8.625rem", // 138px
        38: "9.5rem", // 152px
        38.5: "9.625rem", // 154px
        42: "10.5rem", // 168px
        42.5: "10.625rem", // 170px
        46: "11.5rem", // 184px
        46.5: "11.625rem", // 186px
        50: "12.5rem", // 200px
        50.5: "12.625rem", // 202px
        54: "13.5rem", // 216px
        54.5: "13.625rem", // 218px
        58: "14.5rem", // 232px
        58.5: "14.625rem", // 234px
        62: "15.5rem", // 248px
        62.5: "15.625rem", // 250px
        66: "16.5rem", // 264px
        66.5: "16.625rem", // 266px
        70: "17.5rem", // 280px
        70.5: "17.625rem", // 282px
        74: "18.5rem", // 296px
        74.5: "18.625rem", // 298px
        78: "19.5rem", // 312px
        78.5: "19.625rem", // 314px
        82: "20.5rem", // 328px
        82.5: "20.625rem", // 330px
        86: "21.5rem", // 344px
        86.5: "21.625rem", // 346px
        90: "22.5rem", // 360px
        90.5: "22.625rem", // 362px
        94: "23.5rem", // 376px
        94.5: "23.625rem", // 378px
      },
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
      // spacing: {
      //   small: "10px",
      //   medium: "20px",
      // },
      // padding: ({ theme }) => ({
      //   btnSmall: theme("spacing.small"),
      //   btnMedium: theme("spacing.medium"),
      // }),
      // backgroundSize: ({ theme }) => ({
      //   auto: "auto",
      //   cover: "cover",
      //   contain: "contain",
      //   ...theme("spacing"),
      // }),
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
      jt40: ["3rem", "100%"],
      base: ["16px", "24px"],
      lg: ["20px", "160%"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
