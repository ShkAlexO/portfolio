import styled from "styled-components";

type HeadingPropsType = {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const sizes: Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", { default: string; sm: string }> = {
    h1: {
        default: "30px",
        sm: "28px",
    },
    h2: {
        default: "28px",
        sm: "26px",
    },
    h3: {
        default: "26px",
        sm: "24px",
    },
    h4: {
        default: "24px",
        sm: "22px",
    },
    h5: {
        default: "22px",
        sm: "20px",
    },
    h6: {
        default: "20px",
        sm: "18px",
    },
};

export const Heading = styled(({ as, fontSize, ...props }: HeadingPropsType) => {
    const Component = as;
    return <Component {...props} />;
})<HeadingPropsType>`
    font-size: ${({ fontSize, as }) => sizes[fontSize || as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"].default};

    @media (max-width: 768px) {
        font-size: ${({ fontSize, as }) => sizes[fontSize || as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"].sm};
    }
`;
