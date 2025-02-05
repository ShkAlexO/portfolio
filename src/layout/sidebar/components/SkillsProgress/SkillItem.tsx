import {SkillLangItemPropsType} from "@/data/userData";
import {SkillItemStyled, S} from "@sbc/SkillsProgress/SkillItem.styles";

export const SkillItem = ({name, percentages}: SkillLangItemPropsType) => {
    return (
        <SkillItemStyled>
            <S.Technology>{name}</S.Technology>
            <S.Percentages>{percentages}%</S.Percentages>
            <S.Progress percentages={percentages}/>
        </SkillItemStyled>
    )
}