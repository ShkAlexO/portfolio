import {css} from "styled-components";
import {ButtonStyles} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";

export const Typography = css`
    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        color: ${({theme}) => theme.colors.accent};
        line-height: 1.3;
        margin-bottom: .6em;
    }

    h1 {
        font-size: ${({theme}) => theme.titleFs.h1.default};

        ${media.max('xxl')} {
            font-size: ${({theme}) => theme.titleFs.h1.xxl};
        }
    }

    h2 {
        font-size: ${({theme}) => theme.titleFs.h2.default};

        ${media.max('xxl')} {
            font-size: ${({theme}) => theme.titleFs.h2.xxl};
        }
    }

    h3 {
        font-size: ${({theme}) => theme.titleFs.h3.default};

        ${media.max('xxl')} {
            font-size: ${({theme}) => theme.titleFs.h3.xxl};
        }
    }

    h4 {
        font-size: ${({theme}) => theme.titleFs.h4.default};

        ${media.max('xxl')} {
            font-size: ${({theme}) => theme.titleFs.h4.xxl};
        }
    }

    h5 {
        font-size: ${({theme}) => theme.titleFs.h5.default};

        ${media.max('xxl')} {
            font-size: ${({theme}) => theme.titleFs.h5.xxl};
        }
    }

    h6 {
        font-size: ${({theme}) => theme.titleFs.h6.default};

        ${media.max('xxl')} {
            font-size: ${({theme}) => theme.titleFs.h6.xxl};
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
            color: ${({theme}) => theme.colors.accent};
        }
    }
`