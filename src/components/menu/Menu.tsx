import styled from "styled-components";
import {media} from "@/styles/Theme";

import {NavLink} from "react-router-dom";
import {FaHouse, FaUserLarge, FaBriefcase, FaBook} from "react-icons/fa6";

import {RoundIconStyles, ScrollbarStyles} from "@c/ComponentStyles";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><NavLink to="/" title="Home"><FaHouse/></NavLink></li>
                <li><NavLink to="/about" title="About"><FaUserLarge/></NavLink></li>
                <li><NavLink to="/portfolio" title="Portfolio"><FaBriefcase/></NavLink></li>
                <li><NavLink to="/blog" title="Blog"><FaBook/></NavLink></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
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
