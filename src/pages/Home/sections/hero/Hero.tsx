import styled from "styled-components";
import heroImage from '@/assets/images/man.webp';
import {Skills} from "@c/Skills/Skills.tsx";
import {Icon, StyledIcon} from "@c/UI/Icon.tsx";
import {ButtonLink} from "@c/ComponentStyles.ts";
import {ColorText} from "@c/ComponentStyles.ts";
import {Container} from "@c/UI/Container.tsx";
import {media} from "@/styles/Theme.ts";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <Inner>
                    <Content>
                        <Title>I’m Nick. <ColorText colorName="primary" fontWeight="800">Front-End
                            Developer</ColorText> Focused on
                            Clean Code</Title>

                        <Text>
                            Dedicated to building modern, responsive, and visually engaging web solutions that
                            prioritize
                            usability and design.
                        </Text>
                        <ButtonLink to="/about">About me</ButtonLink>
                    </Content>
                    <ImageBox>
                        <img src={heroImage} alt="Hero Image"/>
                        <Icon iconId='decoration-svg'/>
                    </ImageBox>
                    <Skills/>
                </Inner>
            </Container>
        </StyledHero>
    );
}

const StyledHero = styled.section``

const Inner = styled.div`
    padding: 0;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    margin-bottom: 50px;
`

const Content = styled.div`
    align-content: center;
    padding: 35px;
    ${media.max('md')} { 
        padding: 30px 0;
    }
`

const Title = styled.h1`
    font-size: 42px;
    font-weight: 500;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 20px;
    ${media.max('xxl')} {
        font-size: 36px;
    }

    ${ColorText} {
        display: block;
    }
`

const Text = styled.p`
    font-size: 22px;
    max-width: 450px;
    margin-bottom: 40px;
`

const ImageBox = styled.div`
    position: relative;
    align-self: end;

    img {
        display: block;
        width: 100%;
        max-width: 380px;
        height: auto;
        margin: 0 auto;
    }

    ${StyledIcon} {
        position: absolute;
        z-index: -1;
        bottom: -150px;
        left: 50%;
        transform: translateX(-55%);
        width: 700px;
        height: 620px;
        stroke: ${({theme}) => theme.colors.primary};
    }
`



