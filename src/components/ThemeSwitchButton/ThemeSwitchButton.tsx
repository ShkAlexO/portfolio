import {forwardRef, RefAttributes} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleThemeMode} from "@/redux/actions";
import {RootState} from "@/redux/store";

import {FaMoon, FaSun} from "react-icons/fa6";
import {SwitchIcon, ThemeSwitchButtonStyled} from "@c/ThemeSwitchButton/ThemeSwitchButton.styles";
import {THEME_DARK} from "@/constants/themeConstants";

export const ThemeSwitchButton = forwardRef<HTMLButtonElement, RefAttributes<HTMLButtonElement>>(
    (_, ref) => {
        const themeMode = useSelector((state: RootState) => state.theme.themeMode);
        const isDarkMode = themeMode === THEME_DARK;
        const dispatch = useDispatch();

        const handleSwitchTheme = () => {
            dispatch(toggleThemeMode());
        };

        return (
            <ThemeSwitchButtonStyled ref={ref} onClick={handleSwitchTheme}>
                <SwitchIcon as={FaMoon} $isActive={isDarkMode}/>
                <SwitchIcon as={FaSun} $isActive={!isDarkMode}/>
            </ThemeSwitchButtonStyled>
        );
    }
);