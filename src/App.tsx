import {BrowserRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";

import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import {media, theme} from "@/styles/Theme.ts";
import {GlobalStyle} from "@/styles/GlobalStyles.ts";
import './App.css';

import {Header} from "@/layout/header/Header";
import {Main} from "@/layout/main/Main.tsx";
import {Footer} from "@/layout/footer/Footer.tsx";
import {Sidebar} from "@/layout/sidebar/Sidebar.tsx";
import {MainWrap, StyledMainWrap} from "@c/MainWrap.tsx";

function App() {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';
    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter basename={baseUrl}>
                    <StyledApp className={isSidebarOpen ? 'js-open-sidebar' : ''}>
                        <GlobalStyle/>
                        <Header/>
                        <MainWrap>
                            <Main/>
                            <Sidebar/>
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

export default App;