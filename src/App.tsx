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
import {ParticlesBackground} from "@c/ParticlesBackground/ParticlesBackground";

import {Header} from "@/layout/Header/Header";
import {Main} from "@/layout/Main/Main";
import {Footer} from "@/layout/Footer/Footer";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import {THEME_DARK, THEME_LIGHT} from "@/constants/themeConstants";

export type ThemeType = typeof THEME_LIGHT | typeof THEME_DARK;

const themes: Record<ThemeType, typeof lightTheme> = {
    [THEME_LIGHT]: lightTheme,
    [THEME_DARK]: darkTheme,
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
                <ParticlesBackground/>

                <AppStyled className={isSidebarOpen ? 'js-open-sidebar' : ''}>
                    <GlobalStyle/>
                    <Header headerBtnSidebarToggleRef={headerBtnSidebarToggleRef}
                            themeSwitchButtonRef={themeSwitchButtonRef}/>
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