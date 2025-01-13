import heroImage from '../../../../assets/images/man.webp';
import styled from "styled-components";
import {Skills} from "../../../../components/skills/Skills.tsx";
import {ButtonLink} from "../../../../components/UI/ButtonLink.ts";
import {Icon, StyledIcon} from "../../../../components/icon/Icon.tsx";

export const Hero = () => {
    return (
        <StyledHero>
            <Content>
                <Title>I’m Alexandr. <ColorText>Front-End Developer</ColorText> Focused on Clean Code</Title>
                <Text>
                    Dedicated to building modern, responsive, and visually engaging web solutions that prioritize
                    usability and design.
                </Text>
                <ButtonLink to="/about">About me</ButtonLink>
            </Content>

            <ImageBox>
                <img src={heroImage} alt="Hero Image"/>
                <Icon iconId='decoration-svg'/>
            </ImageBox>

            <Skills/>
        </StyledHero>
    );
}

const StyledHero = styled.section`
    padding: 0;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    margin-bottom: 50px;
`

const Content = styled.div`
    align-content: center;
    padding: 35px;
`

const Title = styled.h1`
    font-size: 42px;
    font-weight: 500;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 22px;
    max-width: 450px;
    margin-bottom: 40px;
`

const ColorText = styled.span`
    display: block;
    color: #23ACD8;
    font-weight: 800;
`

const ImageBox = styled.div`
    position: relative;
    
    img {
        display: block;
        align-self: end;
        width: 100%;
        max-width: 380px;
        margin: 0 auto;
        height: auto;
        max-height: 100%;
    }
    
    ${StyledIcon} {
        position: absolute;
        z-index: -1;
        bottom: -150px;
        left: 50%;
        transform: translateX(-55%);
        width: 700px;
        height: 620px; 
    }
`



