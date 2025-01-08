import {BrowserRouter} from 'react-router-dom';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Sidebar} from "./layout/sidebar/Sidebar.tsx";
import styled from "styled-components";
import {GlobalStyle} from "./styles/GlobalStyles.tsx";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <StyledApp>
                <GlobalStyle/>
                <Header/>
                <Main/>
                <Sidebar/>
                <Footer/>
            </StyledApp>
        </BrowserRouter>
    );
}

const StyledApp = styled.div`
    position: relative;
    display: grid;
    grid-template: 1fr auto / 400px 1fr 100px;
    padding: 15px;
    gap: 15px;
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