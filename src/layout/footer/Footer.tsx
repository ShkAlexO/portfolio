import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles";
import {SocialLinks, StyledSocialLinks} from "@c/SocialLinks/SocialLinks";
import {Container} from "@c/UI/Container";
import {media} from "@/styles/Theme";
import {StyledSocialItem} from "@c/SocialLinks/SocialItem";

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
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-columns:  var(--width-sidebar) 1fr var(--width-header);
    gap: var(--gap);
    box-shadow: 0 -3px 6px 3px ${({theme}) => theme.colors.primaryDark};

    ${media.max('xl')} {
        grid-template-columns:  1fr var(--width-header);
    }
    ${media.max('lg')} {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    ${media.max('xs')} {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`

const Inner = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    ${media.max('xl')} {
        grid-column: 1 / -2;
    }
    ${media.max('sm')} {
        grid-column: 1 / -1;
    }
    
    ${StyledSocialLinks} {
        justify-content: center;
        ${media.max('xs')} {
            gap: 10px 20px;
        }
        ${media.max('em')} {
            gap: 10px 13px;
        }
    }
    
    ${StyledSocialItem} {
        ${media.max('md')} {
            width: 35px;
            font-size: .9rem;
        }
    }
`
