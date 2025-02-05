import {NavLink} from "react-router-dom";
import {FaHouse, FaUserLarge, FaBriefcase, FaBook} from "react-icons/fa6";
import {Nav} from "@c/Menu/Menu.styles";

export const Menu = () => {
    return (
        <Nav>
            <ul>
                <li><NavLink to="/" title="Home"><FaHouse/></NavLink></li>
                <li><NavLink to="/about" title="About"><FaUserLarge/></NavLink></li>
                <li><NavLink to="/portfolio" title="Portfolio"><FaBriefcase/></NavLink></li>
                <li><NavLink to="/blog" title="Blog"><FaBook/></NavLink></li>
            </ul>
        </Nav>
    );
};