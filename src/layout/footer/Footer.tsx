import {SocialLinks} from "@c/SocialLinks/SocialLinks";
import {Container} from "@c/UI/Container/Container";
import {FooterStyled, Inner} from "@/layout/footer/Footer.styles";

export const Footer = () => {
    return (
        <FooterStyled>
            <Inner>
                <Container>
                    <SocialLinks/>
                </Container>
            </Inner>
        </FooterStyled>
    );
};