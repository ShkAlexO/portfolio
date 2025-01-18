import {css} from "styled-components";

export const RoundIconStyles = css`
    position: relative;
    isolation: isolate;
    overflow: hidden;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 5px;
    width: 45px;
    aspect-ratio: 1/1;
    color: ${({theme}) => theme.colors.white};
    transition: all .3s ease;

    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(90deg, ${({theme}) => theme.colors.darkBlue} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
        transition: all .3s ease;
    }

    &:hover {
        color: currentColor;
        box-shadow: 0px 0px 3px 2px rgba(${({theme}) => theme.colors.secondaryRgb},0.3);

        &::before {
            transform: rotate(45deg);
        }
    }

    svg {
        display: block;
        width: auto;
        height: auto;

        path {
            stroke-width: 1px
        }
    }
`