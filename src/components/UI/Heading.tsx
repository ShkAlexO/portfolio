import styled from "styled-components";
import {media} from "@/styles/Theme.ts";

type HeadingPropsType = {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const sizes: Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", { default: string; xxl: string }> = {
    h1: {
        default: "30px",
        xxl: "28px",
    },
    h2: {
        default: "28px",
        xxl: "26px",
    },
    h3: {
        default: "26px",
        xxl: "24px",
    },
    h4: {
        default: "24px",
        xxl: "22px",
    },
    h5: {
        default: "22px",
        xxl: "20px",
    },
    h6: {
        default: "20px",
        xxl: "18px",
    },
};

export const Heading = styled(({ as, fontSize, ...props }: HeadingPropsType) => {
    const Component = as;
    return <Component {...props} />;
})<HeadingPropsType>`
    font-size: ${({ fontSize, as }) => sizes[fontSize || as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"].default};

    ${media.max('xxl')} {
        font-size: ${({ fontSize, as }) => sizes[fontSize || as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"].xxl};
    }
`;
