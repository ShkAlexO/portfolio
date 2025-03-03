import {FC, RefObject} from "react"
import {useDispatch} from "react-redux";
import {toggleSidebarVisibility} from "@/redux/actions";

import {useResponsiveVisibility} from "@/hooks/useResponsiveVisibility";

import {Menu} from "@c/_Menu/Menu";
import {ThemeSwitchButton} from "@c/ThemeSwitchButton/ThemeSwitchButton";
import {HeaderBtnSidebarToggle} from "@c/HeaderBtnSidebarToggle/HeaderBtnSidebarToggle";

import {commonStyles} from "@/styles/Theme";
import {
    HeaderStyled,
    MenuBox,
    Controls
} from "@/layout/_Header/Header.styles";

type HeaderPropsType = {
    headerBtnSidebarToggleRef: RefObject<HTMLButtonElement>
    themeSwitchButtonRef: RefObject<HTMLButtonElement>
};

export const Header: FC<HeaderPropsType> = ({headerBtnSidebarToggleRef, themeSwitchButtonRef}) => {
    const dispatch = useDispatch();

    const isSidebarBtnVisible = useResponsiveVisibility(commonStyles.breakpoint.xl);

    const handleSidebarToggle = () => {
        dispatch(toggleSidebarVisibility());
    };

    return (
        <HeaderStyled>
            <Controls>
                <ThemeSwitchButton ref={themeSwitchButtonRef}/>

                {isSidebarBtnVisible && (
                    <HeaderBtnSidebarToggle
                        ref={headerBtnSidebarToggleRef}
                        onClick={handleSidebarToggle}
                    />
                )}
            </Controls>

            <MenuBox>
                <Menu/>
            </MenuBox>
        </HeaderStyled>
    );
};