import styled from "styled-components";
import {BoxWrapStyles} from "../../components/BoxWrapStyles.ts";

export const Sidebar = () => {

    return (
        <StyledSidebar>
            {/*<BoxWrap>*/}
                sidebar
            {/*</BoxWrap>*/}
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
     ${BoxWrapStyles}
`
