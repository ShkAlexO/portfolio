import styled from "styled-components";
import {userData, SocialItemPropsType} from "@/data/userData"
import {SocialItem} from "@c/SocialLinks/SocialItem";

const socials = userData.socials;

type SocialsListPropsType = {
    list?: Array<string>;
};

export const SocialLinks = ({list}:SocialsListPropsType) => {
    const filteredSocials = list ? socials.filter((item) => list.includes(item.name)) : socials;

    return (
        socials && <StyledSocialLinks>
            {filteredSocials.map((item: SocialItemPropsType) => <SocialItem key={item.name} {...item}/>)}
        </StyledSocialLinks>
    )
}

export const StyledSocialLinks = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 25px;
`