import {css} from "styled-components";

export const RoundIconStyles = css`
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 12px;
    padding: 3%;
    width: 45px;
    aspect-ratio: 1/1;
    color: #fff;
    transition: all .3s ease;

    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(90deg, #1381a4 0%, #264B65 100%);
        transition: all .3s ease;
    }

    &:hover {
        color: currentColor;
        box-shadow: 0px 0px 3px 2px rgba(255,176,124,0.5);

        &::before {
            transform: rotate(45deg);
        }
    }

    svg {
        display: block;
        width: 100%;
        height: auto;

        path {
            stroke-width: 1px
        }
    }
`