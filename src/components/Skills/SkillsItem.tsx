import {FC} from "react";
import {Icon} from "@c/UI/Icon";
import {SkillsItemStyled} from "@c/Skills/SkillsItem.styles";

type SkillsItemPropsType = {
    iconId: string
    title: string
}
export const SkillsItem: FC<SkillsItemPropsType> = ({iconId, title}) => {
    return (
        <SkillsItemStyled>
            <Icon iconId={iconId}/>
            <span>{title}</span>
        </SkillsItemStyled>
    );
}