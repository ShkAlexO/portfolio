import styled from "styled-components";
import {media} from "@/styles/Theme";
import {ButtonLink} from "@c/ComponentStyles";

export const LastPostsStyled = styled.section`
    ${ButtonLink} {
        margin: 60px auto 0;

        ${media.max('lg')} {
            margin-top: 40px;
        }
    }
`