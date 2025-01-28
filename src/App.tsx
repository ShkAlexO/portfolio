import {useRef} from "react";
import {BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {toggleSidebar} from "@/redux/actions";

import {useCloseSidebar} from "@/hooks/useCloseSidebar";

import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import {media, theme} from "@/styles/Theme";
import {GlobalStyle} from "@/styles/GlobalStyles";
import './App.css';

import {Header} from "@/layout/header/Header";
import {Main} from "@/layout/main/Main";
import {Footer} from "@/layout/footer/Footer";
import {Sidebar} from "@/layout/sidebar/Sidebar";
import {MainWrap, StyledMainWrap} from "@c/MainWrap";

export const App = () => {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';
    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

    const dispatch = useDispatch();
    const toggleButtonRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLButtonElement | null>(null);

    useCloseSidebar({
        ref: toggleButtonRef,
        toggleRef: toggleRef,
        callback: () => dispatch(toggleSidebar()),
        condition: isSidebarOpen
    })

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter basename={baseUrl}>
                    <StyledApp className={isSidebarOpen ? 'js-open-sidebar' : ''}>
                        <GlobalStyle/>
                        <Header  toggleRef={toggleRef}/>
                        <MainWrap>
                            <Main/>
                            <Sidebar ref={toggleButtonRef}/>
                        </MainWrap>
                        <Footer/>
                    </StyledApp>
                </BrowserRouter>
            </ThemeProvider>
    );
}

const StyledApp = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns:  var(--width-sidebar) 1fr var(--width-header);
    gap: var(--gap);
    padding: var(--gap);
    height: 100vh;

    ${media.max('xl')} {
        grid-template-columns:  1fr var(--width-header);
    }

    header {
        ${media.min('xl')} {
            grid-area: 1 / 3 / 1 / -1;
        }
    }

    ${StyledMainWrap} {
        ${media.max('xl')} {
            grid-area: 1 / 1 / 2 / 2;
        }
    }

    main {
        ${media.min('xl')} {
            grid-area: 1 / 2 / 2 / 3;
        }
    }

    aside {
        ${media.min('xl')} {
            grid-area: 1 / 1 / 2 / 2;
        }
    }

    footer {
        grid-area: 2 / 1 / -1 / -1;
    }
`;

