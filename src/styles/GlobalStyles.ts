import {createGlobalStyle} from 'styled-components';
import {Typography} from "@/styles/Typography";
import {media} from "@/styles/Theme";

export const GlobalStyle = createGlobalStyle`
    ${Typography}

    ;

    html {
        font-size: 18px;

        ${media.max('xxl')} {
            font-size: 16px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:last-child {
            margin-bottom: 0;
        }
    }

    body {
        position: relative;
        overscroll-behavior-y: none;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: ${({theme}) => theme.colors.colorSd};
        background: ${({theme}) => theme.bodyGradient};
    }


    section {
        margin: 70px 0;

        ${media.max('md')} {
            margin: 50px 0;
        }

        &:first-of-type {
            margin-top: 0;
        }
    }
`;

