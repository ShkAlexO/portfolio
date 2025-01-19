import styled from "styled-components";
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";
import aboutMeImage from "@/assets/images/about_me.jpg";
import {Container} from "@c/Container.tsx";

export const About = () => {
    return(
        <StyledAbout>
            <Container>
            <Inner>
                <Image src={aboutMeImage} alt="About me"/>

            </Inner>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    height: 100%;
    align-content: center;
`

const Inner = styled.div`
display: grid;
    grid-template: 1fr auto / auto 1fr;
    gap: 40px;
`

const Image = styled.img`
    ${BoxWrapStyles};
    padding: 0;
    width: 400px;
`