import styled from "styled-components";
import {media} from "@/styles/Theme";
import {StyledIcon} from "@c/UI/Icon";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100px;
    ${StyledIcon} {
        height: 60px;
        width: auto;
        ${media.max('xxl')} {
            height: 45px;
        }
        ${media.max('lg')} {
            height: 40px;
        }
        ${media.max('md')} {
            height: 35px;
        }
    }
    ${media.max('lg')} {
        font-size: .85rem;
    }
    ${media.max('md')} {
        font-size: .5rem;
    }
`

export const S = {
    Card
}