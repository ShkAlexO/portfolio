import {forwardRef} from "react";
import {
    HeaderBtnSidebarToggleStyled, Line
} from "@c/HeaderBtnSidebarToggle/HeaderBtnSidebarToggle.styles";

type HeaderBtnSidebarTogglePropsType = {
    onClick: () => void
}

export const HeaderBtnSidebarToggle = forwardRef<HTMLButtonElement, HeaderBtnSidebarTogglePropsType>(({onClick}, ref) => {
    return (
        <HeaderBtnSidebarToggleStyled onClick={onClick} ref={ref}>
            <Line/>
            <Line/>
            <Line/>
        </HeaderBtnSidebarToggleStyled>
    );
});