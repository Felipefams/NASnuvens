/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate_gray: "#343434",
        panel_green: "#37FA77",
        panel_blue: "#1652EA",
        panel_blue_opacity: "rgba(22, 82, 234, 0.2)",
        panel_green_darker: "#37fa7733",
        panel_green_opacity: "#37fa7799",
        panel_red: "#FF5858",
        panel_yellow: "#FFD972",
        panel_cyan: "#CCE6F4",
        background_color: "#000",
        modal_background: "rgba(0, 0, 0, 0.8)",
        modal_background_darker: "rgba(0, 0, 0, 0.95)",
        blur_gradient_color: "#000000aa",
        background_color_secondary: "#222",
        background_disabled: "#141414",
        card_background: "#161616",
        text_primary: "#FFF",
        settings_border_and_divider: "rgba(255, 255, 255, 0.20)",
        text: {
          primary: "#FFF",
          secondary: "#000",
          tertiary: "#bbb",
          settings: "#D9D9D9",
          disabled: "#444",
        },
      },
    },
    plugins: [],
  },
};
