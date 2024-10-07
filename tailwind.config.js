/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  content: [],
  theme: {
    

    extend: {
      colors: {
        bg_color: "var(--bg)",
        primary_color: "var(--primarycolor)",
        white: "var(--white)",
        border_color: "var(--bordercolor)",
        line_color: "var(--linecolor)",
        Placeholder_color: "var(--Placeholdercolor)",
        Paragraph_color: "var(--Paragraphcolor)",
        primary_hover: "var(--primaryhover)",
        card_hover: "var(--cardhover)",
        red: "var(--red)",
        red_hover: "var(--redhover)",
        green: "var(--green)",
        green_hover: "var(--greenhover)",
        warning: "var(--warning)",
        warning_hover: "var(--warninghover)",
        values_hover: "var(--valueshover)",
        footer:"var(--footercolor)",
      },
      backgroundPosition: {
        "custom-60": "0px 210px",
        "custom-20-40": "20px 40px",
        "custom-130": "130px 0px",
      },
      backgroundImage: {
        "radial-one-color":
          "radial-gradient(circle,#DBEAFE 0%, transparent 100%)",
        "split-half":
          "linear-gradient(to right, var(--bg2) 50%, var(--white) 50%)",
        "quarter-split":
          "linear-gradient(to left, var(--white) 50%, var(--bg2) 50%), linear-gradient(to bottom, #E4E4E4 50%, #F9FAFB 50%)",
        "rent-bg": "url('@/assets/home-images/rent-car.png')",
        "hero-bg": "url('@/assets/home-images/hero.png')",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    darkTheme: false,  // Disables Daisy UI's dark mode globally
  },
};
