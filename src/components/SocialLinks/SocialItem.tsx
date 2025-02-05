import {SocialItemPropsType} from "@/data/userData";

import {SocialItemStyled} from "@c/SocialLinks/SocialItem.styles"

import {FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, TELEGRAM, YOUTUBE} from "@/constants/socials";

import {
    FaLinkedinIn,
    FaGithub,
    FaFacebookF,
    FaRegPaperPlane,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

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
        <SocialItemStyled to={url} aria-label={name} target='_blank'>
            <IconComponent/>
        </SocialItemStyled>
    )
}