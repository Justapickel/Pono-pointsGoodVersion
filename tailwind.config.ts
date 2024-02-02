import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      Image: {
      'sussy-lol': "url(https://geology.com/state-map/maps/hawaii-county-map.gif)",
      },

      backgroundImage: {
      'sussy-forest': "url('https://cdn.britannica.com/99/94299-050-4FD6184B/Hawaii-cliffs-state-waters-Tourists-Pacific-Ocean.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
