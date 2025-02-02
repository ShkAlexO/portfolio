import styled from "styled-components";
import heroImage from '@/assets/images/man.webp';
import {Skills} from "@c/Skills/Skills";
import {Icon, StyledIcon} from "@c/UI/Icon";
import {ButtonLink} from "@c/ComponentStyles";
import {ColorText} from "@c/ComponentStyles";
import {Container} from "@c/UI/Container";
import {media} from "@/styles/Theme";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <Inner>
                    <Content>
                        <Title>I’m Nick. <ColorText $colorName="primary" $fontWeight="800">Front-End
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

                    <ButtonLink to="/about">About me</ButtonLink>
                </Inner>
            </Container>
        </StyledHero>
    );
}

const StyledHero = styled.section``

const Inner = styled.div`
    padding: 0;
    display: grid;
    margin-bottom: 50px;
    ${media.min('sm')} {
        grid-template-columns: 1.3fr 1fr;
    }
    
    > ${ButtonLink} {
        margin: 30px auto 0;
        ${media.min('sm')} {
            display: none;
        }
    }
`

const Content = styled.div`
    align-content: center;
    padding: 35px;

    ${media.max('md')} {
        padding: 30px 0;
    }

    ${media.max('sm')} {
        padding: 0;
        margin-bottom: 15px;
    }

    ${ButtonLink} {
        ${media.max('sm')} {
            display: none;
        }
    }
`

const Title = styled.h1`
    font-size: calc(${({theme}) => theme.titleFs.h1.default} * 1.5);
    font-weight: 500;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 20px;
    ${media.max('xxl')} {
        font-size: calc(${({theme}) => theme.titleFs.h1.xxl} * 1.4);;
    }
    ${media.max('md')} {
        font-size: calc(${({theme}) => theme.titleFs.h1.xxl} * 1.2);;
    }
    ${media.max('xs')} {
        font-size: ${({theme}) => theme.titleFs.h1.xxl};
    }

    ${ColorText} {
        display: block;
    }
`

const Text = styled.p`
    font-size: 1.2rem;
    max-width: 450px;
    margin-bottom: 40px;
    ${media.max('sm')} {
        margin-bottom: 0;
    }
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
        ${media.max('md')} {
            max-width: 250px;
        }
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
        ${media.max('md')} {
            width: 390px;
            height: 400px;
            bottom: -100px;
        }
        ${media.max('sm')} {
            width: 600px;
            height: 600px;
            bottom: -75px;
            transform: translateX(-35%);
        }
    }
`



