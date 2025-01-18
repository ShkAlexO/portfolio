import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FaHouse, FaUserLarge, FaBriefcase, FaGlasses , FaBook, FaMapLocationDot} from "react-icons/fa6";
import {RoundIconStyles} from "@c/RoundIconStyles.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><NavLink to="/" title="Home"><FaHouse/></NavLink></li>
                <li><NavLink to="/about" title="About"><FaUserLarge/></NavLink></li>
                <li><NavLink to="/services" title="Services"><FaBriefcase/></NavLink></li>
                <li><NavLink to="/portfolio" title="Portfolio"><FaGlasses /></NavLink></li>
                <li><NavLink to="/blog" title="Blog"><FaBook/></NavLink></li>
                <li><NavLink to="/contact" title="Contact"><FaMapLocationDot/></NavLink></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        gap: 25px;
        list-style: none;

        a {
            ${RoundIconStyles};
            font-size: 1rem;
            width: 40px;

            &:hover,
            &.active {
                color: ${({theme}) => theme.colors.secondary};
                box-shadow: 0px 0px 3px 2px rgba(${({theme}) => theme.colors.secondaryRgb},0.3);
                
                &::before {
                    transform: rotate(45deg);
                }
            }
        }
    }
`;
