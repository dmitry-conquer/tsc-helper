module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      fontSize: {},
      colors: {
        primary: {
          light: "#FCB222",
          dark: "#433C2B",
        },
        secondary: {
          DEFAULT: "#74CC05",
        },
        typo: {
          dark: "#131313",
          light: "#515151",
        },
      },
    },
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
    },
  },
};
