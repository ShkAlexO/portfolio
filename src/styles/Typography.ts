import { css }  from "styled-components";
import {ButtonStyles} from "@c/ComponentStyles.ts";
import {media} from "@/styles/Theme.ts";

export const Typography = css`
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: ${({theme}) => theme.colors.blue};
        line-height: 1.3;
        margin-bottom: .6em;
    }

    h1 {
        font-size: 30px;

        ${media.max('xxl')} {
            font-size: 28px;
        }
    }

    h2 {
        font-size: 28px;

        ${media.max('xxl')} {
            font-size: 26px;
        }
    }
  
    h3 {
        font-size: 26px;

        ${media.max('xxl')} {
            font-size: 24px;
        }
    }

    h4 {
        font-size: 24px;

        ${media.max('xxl')} {
            font-size: 22px;
        }
    }

    h5 {
        font-size: 22px;

        ${media.max('xxl')} {
            font-size: 20px;
        }
    }

    h6 {
        font-size: 20px;

        ${media.max('xxl')} {
            font-size: 18px;
        }
    }

    button {
        ${ButtonStyles}
    }

    a {
        color: ${({theme}) => theme.colors.primary};
        text-decoration: none;
        transition: color .3s ease;

        &:hover {
            color: ${({theme}) => theme.colors.blue};
        }
    }
`