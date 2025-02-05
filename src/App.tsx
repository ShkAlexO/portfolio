import {useRef} from "react";
import {BrowserRouter} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {toggleSidebarVisibility} from "@/redux/actions";
import {RootState} from "@/redux/store";

import {useCloseSidebar} from "@/hooks/useCloseSidebar";

import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "@/styles/Theme";
import {GlobalStyle} from "@/styles/GlobalStyles";
import {AppStyled} from "@/App.styles";

import {MainWrap} from "@c/MainWrap/MainWrap";
import {Header} from "@/layout/header/Header";
import {Main} from "@/layout/main/Main";
import {Footer} from "@/layout/footer/Footer";
import {Sidebar} from "@/layout/sidebar/Sidebar";

type ThemeType = "light" | "dark";

const themes: Record<ThemeType, typeof lightTheme> = {
    light: lightTheme,
    dark: darkTheme,
};

export const App = () => {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';
    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const themeMode = useSelector((state: RootState) => state.theme.themeMode) as ThemeType;

    const dispatch = useDispatch();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const headerBtnSidebarToggleRef = useRef<HTMLButtonElement | null>(null);
    const themeSwitchButtonRef = useRef<HTMLButtonElement | null>(null);

    useCloseSidebar({
        sidebarRef: sidebarRef,
        headerBtnSidebarToggleRef: headerBtnSidebarToggleRef,
        condition: isSidebarOpen,
        ignoreClickOnButton: themeSwitchButtonRef.current,
        callback: () => dispatch(toggleSidebarVisibility()),
    })

    return (
        <ThemeProvider theme={themes[themeMode]}>
            <BrowserRouter basename={baseUrl}>
                <AppStyled className={isSidebarOpen ? 'js-open-sidebar' : ''}>
                    <GlobalStyle/>
                    <Header headerBtnSidebarToggleRef={headerBtnSidebarToggleRef} themeSwitchButtonRef={themeSwitchButtonRef}/>
                    <MainWrap>
                        <Main/>
                        <Sidebar ref={sidebarRef}/>
                    </MainWrap>
                    <Footer/>
                </AppStyled>
            </BrowserRouter>
        </ThemeProvider>
    );
}