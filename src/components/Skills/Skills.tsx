import {SkillsItem} from "@c/Skills/SkillsItem";
import {SkillsStyled, S} from "@c/Skills/Skills.styles"

import {skillsData, SkillPropsType} from "@/data/skillsData";

export const Skills = () => {
    return (
        <SkillsStyled>
            <S.Inner>
                <S.Title>My Skills:</S.Title>
                <S.List>
                    {skillsData.map(({iconId, title}: SkillPropsType) => (
                        <SkillsItem key={iconId} iconId={iconId} title={title}/>
                    ))}
                </S.List>
            </S.Inner>
        </SkillsStyled>
    );
}