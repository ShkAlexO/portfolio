import styled from "styled-components";
import {media} from "@/styles/Theme";
import {RoundIconStyles, ScrollbarStyles} from "@c/ComponentStyles";

export const Nav = styled.nav`
    ${ScrollbarStyles};
    height: 100%;
    padding: var(--scroll-box-padding) 10px;
    align-content: center;
    overflow-y: auto;

    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--scroll-box-padding);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background-color: rgb(${({theme}) => theme.colors.colorStRGB});
        background: linear-gradient(0deg, rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%, rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 15%, rgba(${({theme}) => theme.colors.colorStRGB}, 1) 50%);
    }

    ${media.max('sm')} {
        padding-left: 5px;
        padding-right: 5px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 100%;
        list-style: none;

        li {
            width: 100%;
        }

        a {
            ${RoundIconStyles};
            font-size: 1rem;
            width: 100%;

            ${media.max('xs')} {
                font-size: .85rem;
            }

            &:hover,
            &.active {
                color: ${({theme}) => theme.colors.secondary};
                box-shadow: 0 0 3px 2px rgba(${({theme}) => theme.colors.secondaryRgb}, 0.3);

                &::before {
                    transform: rotate(45deg);
                }
            }
        }
    }
`;