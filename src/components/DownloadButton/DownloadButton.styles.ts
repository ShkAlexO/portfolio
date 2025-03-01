import styled, {keyframes} from "styled-components";
import {ButtonStyles} from "@c/ComponentStyles";

const opacityAnimation = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: .7;
    }
    100% {
        opacity: 1;
    }
`;
  
const DownloadButtonStyled = styled.a`
    ${ButtonStyles};
    position: relative;
    display: flex;
    justify-content: center;
    column-gap: 8px;

    &::before {
        animation: ${opacityAnimation} 1s ease-in-out infinite;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 15;
    }
`

const Icon = styled.svg`
    flex-shrink: 0;
`

const Text = styled.span`
`

export {DownloadButtonStyled}

export const S = {
    Text,
    Icon
}