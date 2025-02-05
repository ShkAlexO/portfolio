import {RefObject} from "react"
import {useDispatch} from "react-redux";
import {toggleSidebarVisibility} from "@/redux/actions";
import {ThemeSwitchButton} from "@c/ThemeSwitchButton/ThemeSwitchButton";

import {Menu} from "@c/Menu/Menu";
import {HeaderBtnSidebarToggle} from "@c/HeaderBtnSidebarToggle/HeaderBtnSidebarToggle";

import {
    HeaderStyled,
    MenuBox,
    HeaderBtnSidebarToggleBox, ThemeSwitchButtonBox
} from "@/layout/header/Header.styles";

type HeaderPropsType = {
    headerBtnSidebarToggleRef: RefObject<HTMLButtonElement>
    themeSwitchButtonRef: RefObject<HTMLButtonElement>
};

export const Header = ({headerBtnSidebarToggleRef, themeSwitchButtonRef}: HeaderPropsType) => {
    const dispatch = useDispatch();

    const handleSidebarToggle = () => {
        dispatch(toggleSidebarVisibility());
    };

    return (
        <HeaderStyled>
            <HeaderBtnSidebarToggleBox>
                <HeaderBtnSidebarToggle ref={headerBtnSidebarToggleRef} onClick={handleSidebarToggle}/>
            </HeaderBtnSidebarToggleBox>

            <ThemeSwitchButtonBox>
                <ThemeSwitchButton ref={themeSwitchButtonRef}/>
            </ThemeSwitchButtonBox>

            <MenuBox>
                <Menu/>
            </MenuBox>
        </HeaderStyled>
    );
};