function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue == undefined) {
      opacityValue = 1;
    }
    return `rgba(var(${variableName}),${opacityValue})`;
  };
}

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-slow": "bounce 1.5s ease-in-out infinite",
      },
      fontFamily: {
        caveat: "'Caveat', cursive",
      },

      textColor: {
        code: {
          import: withOpacity("--color-import"),
          tag: withOpacity("--color-tag"),
          "attr-name": withOpacity("--color-attr-name"),
          "attr-value": withOpacity("--color-attr-value"),
          component: withOpacity("--color-component"),
          function: withOpacity("--color-function"),
          text: withOpacity("--color-code-text"),
          brakket: withOpacity("--color-brakket"),
        },
        card: {
          title: withOpacity("--color-title"),
          text: withOpacity("--color-card-text"),
        },
      },
      backgroundColor: {
        card: {
          card: withOpacity("--color-card"),
          contrast: withOpacity("--color-contrast"),
        },
      },
      colors: {
        scroll: {
          DEFAULT: `rgba(255,255,255,0.15)`,
          light: `rgba(0, 0, 0, 0.15)`,
        },
        borderColorCard: {
          DEFAULT: withOpacity("--color-card"),
        },
      },
    },
  },
  variants: {
    scrollbar: ["rounded", "opacity"],
    extend: {},
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [require("tailwind-scrollbar")],
};
