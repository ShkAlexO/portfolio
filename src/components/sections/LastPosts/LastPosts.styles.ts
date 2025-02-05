import styled from "styled-components";
import {media} from "@/styles/Theme";
import {ButtonLink} from "@c/ComponentStyles";
import {PostCardStyled} from "@c/PostCard/PostCard.styles"

export const LastPostsStyled = styled.section`
    ${ButtonLink} {
        margin: 60px auto 0;

        ${media.max('lg')} {
            margin-top: 40px;
        }
    }

    ${PostCardStyled} {
        &:nth-of-type(3) {
            ${media.max('md')} {
                display: none;
            }
        }
    }
`