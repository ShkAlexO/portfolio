import styled from "styled-components";
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";
import {SocialLinks} from "@c/SocialLinks/SocialLinks.tsx";
import {Container} from "@c/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Inner>
                <Container>
                    <SocialLinks />
                </Container>
            </Inner>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    ${BoxWrapStyles};
    display: grid;
    grid-template-columns:  400px 1fr 100px;
    gap: 15px;
`

const Inner = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
`
