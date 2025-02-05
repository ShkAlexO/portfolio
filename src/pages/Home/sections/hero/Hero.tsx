import heroImage from '@/assets/images/man.webp';

import {Container} from "@c/UI/Container/Container";
import {Skills} from "@c/Skills/Skills";
import {Icon} from "@c/UI/Icon";

import {ButtonLink} from "@c/ComponentStyles";
import {ColorText} from "@c/ComponentStyles";
import {HeroStyled, S} from "@/pages/Home/sections/Hero/Hero.styles";

export const Hero = () => {
    return (
        <HeroStyled>
            <Container>
                <S.Inner>
                    <S.Content>
                        <S.Title>I’m Nick. <ColorText $colorName="primary" $fontWeight="800">Front-End
                            Developer</ColorText> Focused on
                            Clean Code</S.Title>

                        <S.Text>
                            Dedicated to building modern, responsive, and visually engaging web
                            solutions that
                            prioritize
                            usability and design.
                        </S.Text>

                        <ButtonLink to="/about">About me</ButtonLink>
                    </S.Content>

                    <S.ImageBox>
                        <img src={heroImage} alt="Hero Image"/>
                        <Icon iconId='decoration-svg'/>
                    </S.ImageBox>

                    <Skills/>

                    <ButtonLink to="/about">About me</ButtonLink>
                </S.Inner>
            </Container>
        </HeroStyled>
    );
}