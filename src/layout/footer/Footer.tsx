import styled from "styled-components";
import {BoxWrapStyles} from "../../components/BoxWrapStyles.ts";

export const Footer = () => {

    return (
        <StyledFooter>
             {/*<BoxWrap>*/}
                 Footer
             {/*</BoxWrap>*/}
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
     ${BoxWrapStyles}
`
