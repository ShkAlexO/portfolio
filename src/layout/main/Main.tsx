import styled from "styled-components";
import {HomePage} from "../../pages/HomePage/HomePage.tsx";
import {BoxWrap} from "../../components/BoxWrap.tsx";

export const Main = () => {

    return (
        <StyledMain>
            <BoxWrap padding="0px 0px 0px 0px" borderWidth='3px' bgColor="rgba(29, 33, 45, .6)" boxShadow='none'>
                <StyledMainInner>
                    <HomePage/>
                </StyledMainInner>
            </BoxWrap>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    overflow: hidden;
`

const StyledMainInner = styled.div`
    height: 100%;
    overflow-y: auto;
    padding: 20px 20px 0 20px;
`
