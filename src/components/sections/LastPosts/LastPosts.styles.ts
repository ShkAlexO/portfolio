import styled from "styled-components";
import {ButtonLink} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";
import {StyledPostCard} from "@c/PostCard";

const LastPosts = styled.section`
    ${ButtonLink} {
        margin: 60px auto 0;

        ${media.max('lg')} {
            margin-top: 40px;
        }
    }

    ${StyledPostCard} {
        &:nth-of-type(3) {
            ${media.max('md')} {
                display: none;
            }
        }
    }
`

export const S = {LastPosts}