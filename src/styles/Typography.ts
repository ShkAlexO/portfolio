import { css }  from "styled-components";
import {ButtonStyles} from "../components/UI/ButtonStyles.ts";

export const Typography = css`
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: #6edcff;
    }

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 28px;
    }

    h3 {
        font-size: 26px;
    }

    h4 {
        font-size: 24px;
    }

    h5 {
        font-size: 22px;
    }

    h6 {
        font-size: 20px;
    }

    button {
        ${ButtonStyles}
    }

    a {
        color: #23ACD8;
        text-decoration: none;
        transition: color .3s ease;

        &:hover {
            color: #1A8BB8;
        }
    }
`