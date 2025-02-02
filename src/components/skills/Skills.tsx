import {S} from "./Skills.styles"
import {Card} from "@c/Skills/Card";
import {skillsData, SkillPropsType} from "@/data/skillsData";

export const Skills = () => {
    return (
        <S.Skills>
            <S.Inner>
                <S.Title>My Skills:</S.Title>
                <S.List>
                    {skillsData.map(({iconId, title}: SkillPropsType) => (
                        <Card key={iconId} iconId={iconId} title={title}/>
                    ))}
                </S.List>
            </S.Inner>
        </S.Skills>
    );
}

