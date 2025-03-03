import {FC} from "react";
import {ExtraSkillItemPropsType} from "@/data/userData";
import {ExtraSkillItemStyled, S} from "@sbc/ExtraSkills/ExtraSkillItem.styles";
import {FaCubes} from "react-icons/fa6";

type ExtraSkillArrayPropsType = {
    extraSkills: ExtraSkillItemPropsType
}

export const ExtraSkillItem: FC<ExtraSkillArrayPropsType> = ({extraSkills}) => {
    return (
        <ExtraSkillItemStyled>
            <S.ExtraSkillIcon as={FaCubes}/>
            <S.Text>{extraSkills.join(', ')}</S.Text>
        </ExtraSkillItemStyled>
    )
}