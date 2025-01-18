import styled from "styled-components";
import {SkillLangItemPropsType} from "@/data/userData.ts";

export const SkillItem = ({name, percentages}: SkillLangItemPropsType) => {
    return (
        <StyledSkillItem>
            <Technology>{name}</Technology>
            <Percentages>{percentages}%</Percentages>
            <Progress percentages={percentages}/>
        </StyledSkillItem>
    )
}

const StyledSkillItem = styled.div`
    display: grid;
    grid-template: repeat(2, auto) / 1fr auto;
    gap: 6px 50px;
`

const Technology = styled.span`
    padding: 0 12px;
`
const Percentages = styled.span`
    padding: 0 8px;
`
const Progress = styled.div<{ percentages: number }>`
    position: relative;
    padding: 2px;
    border: 1px solid #23ACD8;
    border-radius: 4px;
    grid-column: 1/-1;

    &::before {
        content: '';
        display: block;
        width: ${({ percentages }) => percentages}%;
        height: 4px;
        border-radius: 4px;
        background: linear-gradient(to right, #1381a4 90%, #264B65 100%);
    }
`


