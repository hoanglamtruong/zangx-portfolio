import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#07111F",        // 1. Nền chính
          surface: "#102A43",   // 2. Nền phụ / Card surface
          text: "#F4F0E8",      // 3. Chữ sáng
          accent: "#C9AA72",    // 4. Điểm nhấn / nút (Champagne Gold)
          muted: "#AEBCC5",     // 5. Chữ phụ
          lime: "#A8F238",      // 6. Điểm nhấn rất nhỏ (<5% diện tích)
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
