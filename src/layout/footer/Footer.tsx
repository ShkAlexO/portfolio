import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles.ts";
import {SocialLinks} from "@c/SocialLinks/SocialLinks.tsx";
import {Container} from "@c/UI/Container.tsx";
import {media} from "@/styles/Theme.ts";

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
    grid-template-columns:  var(--width-sidebar) 1fr var(--width-header);
    gap: var(--gap);
    box-shadow: 0px -3px 6px 3px ${({theme}) => theme.colors.primaryDark};

    ${media.max('xl')} {
        grid-template-columns:  1fr var(--width-header);
    }
`

const Inner = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    ${media.max('xl')} {
        grid-column: 1 / -2;
    }
`
