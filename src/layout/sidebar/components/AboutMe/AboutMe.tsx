import {GITHUB, INSTAGRAM, LINKEDIN, TELEGRAM} from "@/constants/socials";
import {userData} from "@/data/userData";

import {SocialLinks} from "@c/SocialLinks/SocialLinks";
import {AboutMeStyled, S} from "@sbc/AboutMe/AboutMe.styles";

export const AboutMe = () => {
    const sidebarSocials = [GITHUB, LINKEDIN, TELEGRAM, INSTAGRAM];
    const {avatar, name, position} = userData;

    return (
        <AboutMeStyled>
            <S.Image>
                <img src={avatar} alt="Front-End Developer"/>
            </S.Image>
            <S.Name as='h2' fontSize='h5'>{name}</S.Name>
            <S.Position as='h3'>{position}</S.Position>
            <SocialLinks list={sidebarSocials}/>
        </AboutMeStyled>
    )
}