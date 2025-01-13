import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {BoxWrapStyles} from "../../components/BoxWrapStyles.ts";

export const Header = () => {

    return (
        <StyledHeader>
             {/*<BoxWrap>*/}
                 <Menu/>
             {/*</BoxWrap>*/}
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
 ${BoxWrapStyles}
`
