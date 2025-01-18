import styled from "styled-components";
import {Card} from "@c/Skills/Card.tsx";
import {skillsData, SkillPropsType} from "@/data/skillsData.ts";
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledSkillsInner>
                <Title>My Skills:</Title>
                <StyledSkillsList>
                    {skillsData.map(({iconId, title}: SkillPropsType) => (
                        <Card key={iconId} iconId={iconId} title={title}/>
                    ))}
                </StyledSkillsList>
            </StyledSkillsInner>
        </StyledSkills>
    );
}

const StyledSkills = styled.div`
    ${BoxWrapStyles};
    grid-column: 1 / -1;
    background: linear-gradient(90deg, #1381a4 0%, #264B65 100%);
`
const Title = styled.h3`
    color: inherit;
    width: fit-content;
`

const StyledSkillsInner = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    width: fit-content;
    margin: 0 auto;
    align-items: center;
    gap: 70px;
`

const StyledSkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`