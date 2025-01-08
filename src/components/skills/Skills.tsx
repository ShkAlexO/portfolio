import styled from "styled-components";
import {Card} from "./Card.tsx";
import {BoxWrap} from "../BoxWrap.tsx";
import {skillsData, SkillPostType} from "../../data/skillsData.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledBoxWrap>
                <StyledSkillsInner>
                <h3>My Skills:</h3>
                <StyledSkillsList>
                    {skillsData.map(({iconId, title}: SkillPostType) => (
                        <Card key={iconId} iconId={iconId} title={title}/>
                    ))}
                </StyledSkillsList>
                </StyledSkillsInner>
            </StyledBoxWrap>
        </StyledSkills>
    );
}

const StyledSkills = styled.div`
    grid-column: 1 / -1;

    h3 {
        font-size: 36px;
        width: fit-content;
    }
`

const StyledBoxWrap = styled(BoxWrap)`
    background: linear-gradient(90deg, #1381a4 0%, #264B65 100%);
`;


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