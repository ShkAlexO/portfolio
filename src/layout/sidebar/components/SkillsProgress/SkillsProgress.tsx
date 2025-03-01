import {FC} from "react";
import {TechAndLanguagesType} from "@/data/userData";

import {SkillItem} from "@sbc/SkillsProgress/SkillItem";
import {SidebarTitle} from "@sbc/SidebarTitle/SidebarTitle";
import {SkillProgressStyled, S} from "@sbc/SkillsProgress/SkillsProgress.styles";

type SkillProgressPropsType = {
    title: string
    list?: TechAndLanguagesType[];
};

export const SkillsProgress: FC<SkillProgressPropsType> = ({title, list}) => {
    if (!list?.length) return null;

    return (
        <SkillProgressStyled>
            {title && <SidebarTitle title={title}/>}
            <S.List>
                {list.map((item) => <SkillItem key={item.name} {...item}/>)}
            </S.List>
        </SkillProgressStyled>
    )
}