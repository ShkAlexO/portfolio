const commonStyles = {
    breakpoint: {
        em: 375,
        xs: 576,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1440,
        xxl: 1680,
        full: 1920,
    },
    radius: "8px",
    titleFs: {
        h1: {
            default: "28px",
            xxl: "26px",
        },
        h2: {
            default: "26px",
            xxl: "24px",
        },
        h3: {
            default: "24px",
            xxl: "22px",
        },
        h4: {
            default: "22px",
            xxl: "20px",
        },
        h5: {
            default: "20px",
            xxl: "18px",
        },
        h6: {
            default: "19px",
            xxl: "17px",
        },
    }
}

export const darkTheme = {
    colors: {
        primary: "#23ACD8",
        primaryRgb: "35, 172, 216",
        secondary: "#96e56c",
        secondaryRgb: "150, 229, 108",
        primaryDark: "#264B65",
        primaryDarkRgb: "38, 75, 101",
        blue: "#6edcff",
        blueRgb: "110, 220, 255",
        darkBlue: "#1381a4",
        darkRgb: "29, 33, 45",
        white: "#fff",
        whiteRgb: "255, 255, 255",
    },
    ...commonStyles
}

export const lightTheme = {
    colors: {
        primary: "#FFD700",
        primaryRgb: "255, 215, 0",
        secondary: "#FFD700",
        secondaryRgb: "255, 215, 0",
        primaryDark: "#264B65",
        primaryDarkRgb: "38, 75, 101",
        blue: "#0066FF",
        blueRgb: "0, 102, 255",
        darkBlue: "#1E3D58",
        darkRgb: "30, 61, 88",
        white: "#f5f5f5",
        whiteRgb: "245, 245, 245",
    },
    ...commonStyles,
};

export const media = {
    min: (size: keyof typeof commonStyles.breakpoint) => `@media (min-width: ${commonStyles.breakpoint[size]}px)`,
    max: (size: keyof typeof commonStyles.breakpoint) => `@media (max-width: ${commonStyles.breakpoint[size] - 1}px)`,
    range: (minSize: keyof typeof commonStyles.breakpoint, maxSize: keyof typeof commonStyles.breakpoint) =>
        `@media (min-width: ${commonStyles.breakpoint[minSize]}px) and (max-width: ${commonStyles.breakpoint[maxSize] - 1}px)`,
};