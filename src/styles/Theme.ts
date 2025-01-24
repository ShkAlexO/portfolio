export const theme = {
    breakpoint: {
        xs: 576,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1440,
        xxl: 1680,
        full: 1920,
    },
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
    radius: "8px"
}

export const media = {
    min: (size: keyof typeof theme.breakpoint) => `@media (min-width: ${theme.breakpoint[size]}px)`,
    max: (size: keyof typeof theme.breakpoint) => `@media (max-width: ${theme.breakpoint[size] - 1}px)`,
    range: (minSize: keyof typeof theme.breakpoint, maxSize: keyof typeof theme.breakpoint) =>
        `@media (min-width: ${theme.breakpoint[minSize]}px) and (max-width: ${theme.breakpoint[maxSize] - 1}px)`,
};

// ${media.max('')} { }
// ${media.min('')} { }
// ${media.range('sm', 'lg')} { }