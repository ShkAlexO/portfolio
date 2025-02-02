import styled from "styled-components";
import {RoundIconStyles, ScrollbarStyles} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";

export const Nav = styled.nav`
    ${ScrollbarStyles};
    height: 100%;
    padding: 50px 10px;
    align-content: center;
    overflow-y: auto;
    ${media.max('sm')} {
        padding: 50px 5px;
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