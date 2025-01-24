import styled from "styled-components";
import {Link} from "react-router-dom";
import {SocialItemPropsType} from "@/data/userData.ts";
import {FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, TELEGRAM, YOUTUBE} from "@/constants/socials.ts";
import {FaLinkedinIn, FaGithub, FaFacebookF, FaRegPaperPlane, FaInstagram, FaYoutube} from "react-icons/fa";
import {RoundIconStyles} from "@c/ComponentStyles.ts";

const iconMap = {
    [LINKEDIN]: FaLinkedinIn,
    [GITHUB]: FaGithub,
    [FACEBOOK]: FaFacebookF,
    [TELEGRAM]: FaRegPaperPlane,
    [INSTAGRAM]: FaInstagram,
    [YOUTUBE]: FaYoutube,
};

type IconKey = keyof typeof iconMap;

export const SocialItem = ({name, url}: SocialItemPropsType) => {
    const IconComponent = iconMap[name as IconKey];

    return (
        <StyledSocialItem to={url} aria-label={name} target='_blank'>
            <IconComponent/>
        </StyledSocialItem>
    )
}

export const StyledSocialItem = styled(Link)`
    ${RoundIconStyles};
`

