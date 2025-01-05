import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {BoxWrap} from "../../components/BoxWrap.tsx";

export const Header = () => {

    return (
        <StyledHeader>
             <BoxWrap>
                 <Menu/>
             </BoxWrap>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
 
`
