/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  content: [],
  theme: {
    extend: {
      colors: {
        bg_color: "#F9FAFB",
        primary_color: "#111827",
        white: "#ffffff",
        border_color: "#E5E7EB",
        line_color: "#D1D5DB",
        Placeholder_color: "#9CA3AF",
        Paragraph_color: "#6B7280",
        primary_hover: "#374151",
        card_hover: "#DBEAFE",
        red: "#EF4444",
        red_hover: "#F87171",
        green: "#10B981",
        green_hover: "#34D399",
        warning: "#F97316",
        warning_hover: "#FF9F5C",
        values_hover:"#EFF6FF",
      },
      backgroundPosition: {
        'custom-60': '0px 210px',
        'custom-20-40': '20px 40px',
      },
      backgroundImage: {
        'radial-one-color': 'radial-gradient(circle,#DBEAFE 0%, transparent 100%)',
      },
    },
    
  },
  plugins: [],
};
