import styled from "styled-components";
import {media} from "@/styles/Theme";

export const ThemeSwitchButtonStyled = styled.button`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    column-gap: 2px;
    font-size: 1.35rem;
    border-radius: 50px;
    padding: 2px;

    ${media.max('xxl')} {
        font-size: 1.5rem;
    }

    ${media.max('md')} {
        font-size: 1.2rem;
    }

    ${media.max('sm')} {
        flex-direction: column;
        width: fit-content;
        gap: 2px;
        font-size: 1.4rem;
    }

    ${media.max('xs')} {
        font-size: 1.2rem;
    }

    &:before {
        opacity: 0;
    }
`

export const SwitchIcon = styled.svg<{ $isActive: boolean }>`
    justify-self: center;
    padding: 5px;
    border-radius: 50%;
    background-color: rgba(${({theme}) => theme.colors.primaryRgb}, ${({$isActive}) => ($isActive ? 0.4 : 0)});

    ${media.max('md')} {
        padding: 3px;
    }
`