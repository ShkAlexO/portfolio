import styled from "styled-components";
import {Card} from "@c/Skills/Card";
import {skillsData, SkillPropsType} from "@/data/skillsData";
import {BoxWrapStyles} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";

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
    background: linear-gradient(90deg, ${({theme}) => theme.colors.darkBlue} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
`
const Title = styled.h3`
    color: inherit;
    width: fit-content;
    max-width: 200px;
    margin-bottom: 0;
    ${media.max('md')} {
        font-size: 18px;
    }
    ${media.max('sm')} {
        margin: 0 auto;
`

const StyledSkillsInner = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    width: fit-content;
    margin: 0 auto;
    align-items: center;
    gap: 70px;
    ${media.max('xxl')} {
        gap: 35px;
    }
    ${media.max('md')} {
        gap: 25px;
    }
    ${media.max('sm')} {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`

const StyledSkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px 40px;
    
    ${media.max('xxl')} {
        column-gap: 30px;
    }
    ${media.max('em')} {
        column-gap: 20px;
    }
    ${media.max('sm')} {
        max-width: 400px;
    }
`