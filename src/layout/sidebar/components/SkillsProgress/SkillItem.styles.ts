import styled from "styled-components";

const SkillItemStyled = styled.div`
    display: grid;
    grid-template: repeat(2, auto) / 1fr auto;
    gap: 6px 50px;
`

const Technology = styled.span`
    padding: 0 12px;
`

const Level = styled.span`
    padding: 0 8px;
`

const Progress = styled.div<{ $percentages: number }>`
    position: relative;
    padding: 2px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 4px;
    grid-column: 1/-1;

    &::before {
        content: '';
        display: block;
        width: ${({$percentages}) => $percentages}%;
        height: 4px;
        border-radius: 4px;
        background: linear-gradient(
                to right,
                ${({theme}) => theme.colors.primary} 90%,
                ${({theme}) => theme.colors.primaryDark} 100%);
    }
`

export {SkillItemStyled}
export const S = {
    Technology, Level, Progress
}