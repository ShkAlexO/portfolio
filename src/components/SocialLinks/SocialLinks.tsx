import {FC} from "react";
import {SocialItem} from "@c/SocialLinks/SocialItem";
import {userData, SocialItemPropsType} from "@/data/userData"

import {SocialLinksStyled} from "@c/SocialLinks/SocialLinks.styles"

const socials = userData.socials;

type SocialsListPropsType = {
    list?: Array<string>;
};

export const SocialLinks: FC<SocialsListPropsType> = ({list}) => {
    const filteredSocials = list ? socials.filter((item) => list.includes(item.name)) : socials;

    return (
        socials && <SocialLinksStyled>
            {filteredSocials.map((item: SocialItemPropsType) => <SocialItem
                key={item.name} {...item}/>)}
        </SocialLinksStyled>
    )
}