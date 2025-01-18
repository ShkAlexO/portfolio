import styled from "styled-components";
import {SocialLinks, StyledSocialLinks} from "@c/SocialLinks/SocialLinks.tsx";
import { GITHUB, INSTAGRAM, LINKEDIN, TELEGRAM} from "@/constants/socials.ts";
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";
import {userData} from "@/data/userData.ts";
import {StyledSocialItem} from "@c/SocialLinks/SocialItem.tsx";
import {Heading} from "@c/Heading.tsx";

export const AboutMe = () => {
    const sidebarSocials = [GITHUB, LINKEDIN, TELEGRAM, INSTAGRAM];
    const {avatar, name, position} = userData;

    return (
        <StyledAboutMe>
            <Image>
                <img src={avatar} alt="Front-End Developer"/>
            </Image>
            <Name as='h2' fontSize='h5'>{name}</Name>
            <Position as='h3'>{position}</Position>
            <SocialLinks list={sidebarSocials}/>
        </StyledAboutMe>
    )
}

const Name = styled(Heading)`
    text-align: center;
    margin-bottom: 10px;
`

const StyledAboutMe = styled.div`
    ${Name} {
        color: ${({theme}) => theme.colors.white};
    }

    ${StyledSocialLinks} {
        gap: 20px;
        justify-content: center;
    }

    ${StyledSocialItem} {
      font-size: .9rem;
        width: 35px;
    }
`
const Image = styled.div`
    ${BoxWrapStyles};
    background-color: transparent;
    box-shadow: 0px 3px 5px 0px rgba(${({theme}) => theme.colors.whiteRgb} , .3);
    border-width: 2px;
    border-radius: 100%;
    width: 200px;
    aspect-ratio: 1 / 1;
    padding: 0;
    overflow: hidden;
    margin: 0 auto 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`

const Position = styled(Heading)`
    font-size: .9em;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
`
