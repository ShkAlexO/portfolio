import styled from "styled-components";
import {media} from "@/styles/Theme";

const HeaderBtnSidebarToggleStyled = styled.button`
    position: relative;
    max-width: 41px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    flex-shrink: 0;
    aspect-ratio: 1;
    background: transparent;
    padding: 0;
    border: none;
    border-radius: 0;

    ${media.max('md')} {
        max-width: 40px;
    }

    ${media.max('sm')} {
        max-width: 37px;
    }
 
    ${media.max('xs')} {
        max-width: 26px;
    }

    &::before {
        content: none;
    }
`;

const Line = styled.span`
    display: block;
    position: absolute;
    width: 100%;
    height: 10%;
    background: ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.radius};
    transition: all .3s ease;

    &:nth-child(1) {
        top: 20%;
    }

    &:nth-child(2) {
        top: 47%;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: ${({theme}) => theme.colors.primary};
            border-radius: ${({theme}) => theme.radius};
            transition: all .3s ease;
        }
    }

    &:nth-child(3) {
        top: 74%;
    }

    .js-open-sidebar & {
        &:first-of-type,
        &:last-of-type {
            width: 0;
        }

        &:nth-of-type(2) {
            transform: rotate(-45deg);

            &:after {
                transform: rotate(-90deg);
            }
        }

        &:last-of-type {
            right: 0;
        }
    }
`

export {HeaderBtnSidebarToggleStyled, Line}