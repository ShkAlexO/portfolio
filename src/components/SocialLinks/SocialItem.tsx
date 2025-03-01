import {FC} from "react";
import {SocialItemPropsType} from "@/data/userData";

import {SocialItemStyled} from "@c/SocialLinks/SocialItem.styles"

import {FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, TELEGRAM} from "@/constants/socials";

import {
    FaLinkedinIn,
    FaGithub,
    FaFacebookF,
    FaRegPaperPlane,
    FaInstagram
} from "react-icons/fa";

const iconMap = {
    [LINKEDIN]: FaLinkedinIn,
    [GITHUB]: FaGithub,
    [FACEBOOK]: FaFacebookF,
    [TELEGRAM]: FaRegPaperPlane,
    [INSTAGRAM]: FaInstagram,
};

type IconKey = keyof typeof iconMap;
       
export const SocialItem: FC<SocialItemPropsType> = ({name, url}) => {
    const IconComponent = iconMap[name as IconKey];

    return (
        <SocialItemStyled to={url} aria-label={name} target='_blank'>
            <IconComponent/>
        </SocialItemStyled>
    )
}