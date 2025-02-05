import styled from "styled-components";
import {media} from "@/styles/Theme";

type HeadingPropsType = {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = styled(({as, fontSize, ...props}: HeadingPropsType) => {
    const Component = as;
    return <Component {...props} />;
})<HeadingPropsType>`
    font-size: ${
            ({
                 fontSize,
                 as,
                 theme
             }) => theme.titleFs[fontSize || as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"].default};

    ${media.max('xxl')} {
        font-size: ${
                ({
                     fontSize,
                     as,
                     theme
                 }) => theme.titleFs[fontSize || as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"].xxl};
    }
`;