import {SkillLangItemPropsType} from "@/data/userData";

import {SkillItem} from "@sbc/SkillsProgress/SkillItem";
import {SkillProgressStyled, S} from "@sbc/SkillsProgress/SkillsProgress.styles";

type SkillProgressPropsType = {
    title: string
    list?: SkillLangItemPropsType[];
};

export const SkillsProgress = ({title, list}: SkillProgressPropsType) => {
    return (
        list && <SkillProgressStyled>
            {title && <S.Title as='h3' fontSize='h6'>{title}</S.Title>}
            <S.List>
                {list.map((item: SkillLangItemPropsType) => <SkillItem key={item.name} {...item}/>)}
            </S.List>
        </SkillProgressStyled>
    )
}