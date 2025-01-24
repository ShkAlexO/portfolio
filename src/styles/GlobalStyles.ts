import { createGlobalStyle } from 'styled-components';
import {Typography} from "@/styles/Typography.ts";

export const GlobalStyle = createGlobalStyle`
    ${Typography};

    html {
        font-size: 18px;
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
        color: ${({theme}) => theme.colors.white};
        line-height: 1.5;
        //background: linear-gradient(180deg, #05090E 20%, #031A28 30%, #002C45 58%, #04080D 95%);
        background:linear-gradient(180deg,#05090E 33%,#28999c 59%,#002C45 85%,#04080D 95%);
    }
   

    section {
        margin: 70px 0;
        &:first-of-type {
            margin-top: 0;
        }
    }
`;

