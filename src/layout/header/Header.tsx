import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo.tsx";

export const Header = () => {

    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
`
