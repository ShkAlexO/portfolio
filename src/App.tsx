import {BrowserRouter} from 'react-router-dom';
import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import {theme} from "@/styles/Theme.ts";
import {GlobalStyle} from "@/styles/GlobalStyles.ts";
import {Header} from "@/layout/header/Header";
import {Main} from "@/layout/main/Main.tsx";
import {Footer} from "@/layout/footer/Footer.tsx";
import {Sidebar} from "@/layout/sidebar/Sidebar.tsx";
import './App.css';

function App() {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename={baseUrl}>
                <StyledApp>
                    <GlobalStyle/>
                    <Header/>
                    <Main/>
                    <Sidebar/>
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
    grid-template-columns:  400px 1fr auto;
    gap: 15px;
    padding: 15px;
    height: 100vh;

    header {
        grid-area: 1 / 3 / 1 / -1;
    }

    main {
        grid-area: 1 / 2 / 2 / 3;
    }

    aside {
        grid-area: 1 / 1 / 2 / 2;
    }

    footer {
        grid-area: 2 / 1 / 3 / -1;
    }
`;

export default App;