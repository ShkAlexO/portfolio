// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    body {
        font-family: 'Arial', sans-serif;
        color: #fff;
        line-height: 1.6;
        background: linear-gradient(180deg, #05090E 20%, #031A28 30%, #002C45 58%, #04080D 95%);
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: #007BFF;
        }
    }
`;

