export const commonStyles = {
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
        accent: "#6edcff",
        accentRGB: "110, 220, 255",
        colorSt: "#1381a4",
        colorStRGB: "29, 33, 45",
        colorSd: "#fff",
        colorSdRGB: "255, 255, 255",
    },
    bodyGradient: "linear-gradient(180deg,#05090E 33%,#28999c 59%,#002C45 85%,#04080D 95%)",
    ...commonStyles
}

export const lightTheme = {
    colors: {
        primary: "#61788e",
        primaryRgb: "97, 120, 142",
        secondary: "#017399",
        secondaryRgb: "1, 115, 153",
        primaryDark: "#9cbbd1",
        primaryDarkRgb: "156, 187, 209",
        accent: "#186c8d",
        accentRGB: "24, 108, 141",
        colorSt: "#C8DCE6",
        colorStRGB: "200, 220, 230",
        colorSd: "#113c58",
        colorSdRGB: "17, 60, 88",
    },
    bodyGradient: "linear-gradient(180deg, #d0e1e5 33%, #75a9db 59%, #bcd4de 85%, #efefef 95%)",
    ...commonStyles,
};

export const media = {
    min: (size: keyof typeof commonStyles.breakpoint) => `@media (min-width: ${commonStyles.breakpoint[size]}px)`,
    max: (size: keyof typeof commonStyles.breakpoint) => `@media (max-width: ${commonStyles.breakpoint[size] - 1}px)`,
    range: (minSize: keyof typeof commonStyles.breakpoint, maxSize: keyof typeof commonStyles.breakpoint) =>
        `@media (min-width: ${commonStyles.breakpoint[minSize]}px) and (max-width: ${commonStyles.breakpoint[maxSize] - 1}px)`,
};