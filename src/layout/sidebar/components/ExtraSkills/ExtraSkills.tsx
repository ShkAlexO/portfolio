import {FC} from "react";
import {ExtraSkillItemPropsType} from "@/data/userData";

import {ExtraSkillsStyled, S} from "@sbc/ExtraSkills/ExtraSkills.styles";

import {ExtraSkillItem} from "@sbc/ExtraSkills/ExtraSkillItem";
import {SidebarTitle} from "@sbc/SidebarTitle/SidebarTitle";

type ExtraSkills = {
    title: string
    list?: ExtraSkillItemPropsType[];
};

export const ExtraSkills: FC<ExtraSkills> = ({title, list}) => {
    if (!list?.length) return null;

    return (
        <ExtraSkillsStyled>
            {title && <SidebarTitle title={title}/>}
            <S.List>
                {list.map((item, index) => <ExtraSkillItem key={index} extraSkills={item}/>)}
            </S.List>
        </ExtraSkillsStyled>
    )
}