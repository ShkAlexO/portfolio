import { css }  from "styled-components";
import {ButtonStyles} from "@c/UI/ButtonStyles.ts";

export const Typography = css`
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: #6edcff;
        line-height: 1.3;
        margin-bottom: .6em;
    }

    h1 {
        font-size: 30px;
        @media (max-width: 768px) {
            font-size: 28px;
        }
    }

    h2 {
        font-size: 28px;
        @media (max-width: 768px) {
            font-size: 26px;
        }
    }

    h3 {
        font-size: 26px;
        @media (max-width: 768px) {
            font-size: 24px;
        }
    }

    h4 {
        font-size: 24px;
        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    h5 {
        font-size: 22px;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    h6 {
        font-size: 20px;
        @media (max-width: 768px) {
            font-size: 18px;
        }
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