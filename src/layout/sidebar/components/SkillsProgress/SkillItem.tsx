import {FC} from "react";
import {TechAndLanguagesType} from "@/data/userData";
import {SkillItemStyled, S} from "@sbc/SkillsProgress/SkillItem.styles";

export const SkillItem: FC<TechAndLanguagesType> = ({name, percentages, level}) => {
    return (
        <SkillItemStyled>
            <S.Technology>{name}</S.Technology>
            <S.Level>{level ? level : `${percentages}%`}</S.Level>
            <S.Progress $percentages={percentages}/>
        </SkillItemStyled>
    )
}