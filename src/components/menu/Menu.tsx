import {NavLink} from "react-router-dom";
import {FaHouse, FaBriefcase, FaBook} from "react-icons/fa6";
import {Nav} from "@c/Menu/Menu.styles";
import {ROUTES} from "@/constants/routes";

export const Menu = () => {
    return (
        <Nav>
            <ul>
                <li><NavLink to={ROUTES.HOME} title="Home"><FaHouse/></NavLink></li>
                <li><NavLink to={ROUTES.PORTFOLIO} title="Portfolio"><FaBriefcase/></NavLink></li>
                <li><NavLink to={ROUTES.BLOG} title="Blog"><FaBook/></NavLink></li>
            </ul>
        </Nav>
    );
};