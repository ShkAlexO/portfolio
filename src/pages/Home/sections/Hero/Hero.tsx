import {Container} from "@c/UI/Container/Container";
import {Skills} from "@c/Skills/Skills";
import {Icon} from "@c/UI/Icon";
import {useResponsiveVisibility} from "@/hooks/useResponsiveVisibility";

import {BASE_URL} from "@/constants/config";
import {ROUTES} from "@/constants/routes";
import {ButtonLink} from "@c/ComponentStyles";
import {ColorText} from "@c/ComponentStyles";
import {HeroStyled, S} from "@/pages/Home/sections/Hero/Hero.styles";
import {commonStyles} from "@/styles/Theme";

export const Hero = () => {
    const isButtonVisible = useResponsiveVisibility(commonStyles.breakpoint.sm);

    return (
        <HeroStyled>
            <Container>
                <S.Inner>
                    <S.Content>
                        <S.Title>I’m Alexander. <ColorText $colorName="primary" $fontWeight="800">Front-End
                            Developer</ColorText> Focused on
                            Clean Code</S.Title>

                        <S.Text>
                            Dedicated to building modern, responsive, and visually engaging web
                            solutions that
                            prioritize
                            usability and design.
                        </S.Text>

                        {!isButtonVisible &&
                            <ButtonLink to={ROUTES.PORTFOLIO}>My Portfolio</ButtonLink>}
                    </S.Content>

                    <S.ImageBox>
                        <S.Image src={`${BASE_URL}assets/images/Alexander.webp`}
                                 alt="Alexander"/>
                        <Icon iconId='decoration-svg'/>
                    </S.ImageBox>

                    <Skills/>

                    {isButtonVisible && <ButtonLink to={ROUTES.PORTFOLIO}>My Portfolio</ButtonLink>}
                </S.Inner>
            </Container>
        </HeroStyled>
    );
}