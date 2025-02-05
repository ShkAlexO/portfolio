import {forwardRef, RefAttributes} from "react";
import {useDispatch} from "react-redux";
import {toggleThemeMode} from "@/redux/actions";

import {FaMoon, FaSun} from "react-icons/fa6";
import {ThemeSwitchButtonStyled} from "@c/ThemeSwitchButton/ThemeSwitchButton.styles";

export const ThemeSwitchButton = forwardRef<HTMLButtonElement, RefAttributes<HTMLButtonElement>>(
    (_, ref) => {
        const dispatch = useDispatch();

        const handleSwitchTheme = () => {
            dispatch(toggleThemeMode());
        };

        return (
            <ThemeSwitchButtonStyled ref={ref} onClick={handleSwitchTheme}>
                <FaSun />
                <FaMoon />
            </ThemeSwitchButtonStyled>
        );
    }
);