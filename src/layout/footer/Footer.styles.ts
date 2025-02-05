import styled from "styled-components";
import {media} from "@/styles/Theme";

import {BoxWrapStyles} from "@c/ComponentStyles";
import {SocialLinksStyled} from "@c/SocialLinks/SocialLinks.styles";
import {PostCardStyled} from "@c/PostCard/PostCard.styles";

const FooterStyled = styled.footer`
    ${BoxWrapStyles};
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-columns:  var(--width-sidebar) 1fr var(--width-header);
    gap: var(--gap);
    box-shadow: 0 -3px 6px 3px ${({theme}) => theme.colors.primaryDark};

    ${media.max('xl')} {
        grid-template-columns:  1fr var(--width-header);
    }

    ${media.max('lg')} {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    ${media.max('xs')} {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`

const Inner = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;

    ${media.max('xl')} {
        grid-column: 1 / -2;
    }

    ${media.max('sm')} {
        grid-column: 1 / -1;
    }

    ${SocialLinksStyled} {
        justify-content: center;

        ${media.max('xs')} {
            gap: 10px 20px;
        }

        ${media.max('em')} {
            gap: 10px 13px;
        }
    }

    ${PostCardStyled} {
        ${media.max('md')} {
            width: 35px;
            font-size: .9rem;
        }
    }
`

export {FooterStyled, Inner}