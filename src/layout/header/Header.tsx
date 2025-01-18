import styled from "styled-components";
import {Menu} from "@c/Menu/Menu";
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";

export const Header = () => {

    return (
        <StyledHeader>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    ${BoxWrapStyles};
    align-content: center;
`
