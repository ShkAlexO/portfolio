import styled from "styled-components";
import {HomePage} from "../../pages/HomePage/HomePage.tsx";

export const Main = () => {

    return (
        <StyledMain>
            <StyledMainWrap>
            <StyledMainInner>
                <HomePage/>
            </StyledMainInner>
                </StyledMainWrap>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    overflow: hidden;
`

const StyledMainWrap = styled.div`
    position: relative;
    height: 100%;
    padding: 40px 5px;
    border-radius: 8px;
    border: 4px solid  #234155;
    background-color: rgba(29, 33, 45, .6);
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: rgb(29, 33, 45);
    }
    &::before {
        top: 0;
        background: linear-gradient( 0deg,rgba(29,33,45,0) 5%,rgba(29,33,45,0.63) 15%,rgba(29,33,45,1) 39% );
    }
    &::after {
        bottom: 0;
        background: linear-gradient( 180deg,rgba(29,33,45,0) 5%,rgba(29,33,45,0.63) 15%,rgba(29,33,45,1) 39% );
    }
`

const StyledMainInner = styled.div` 
    padding: 0 4vw;
    height: 100%;
    overflow-y: auto;

    &:first-child {
        padding-top: 40px;
    }
    &:last-child {
        padding-bottom: 40px;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background: #23ACD8; 
        border-radius: 8px; 
        border: 2px solid transparent; 
        background-clip: content-box; 
    }

    &::-webkit-scrollbar-track {
        background: rgba(35, 65, 85, .5);
        border-radius: 8px;  
    }
`


