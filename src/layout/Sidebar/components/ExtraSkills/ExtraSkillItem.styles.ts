import styled from "styled-components";

const ExtraSkillItemStyled = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 7px;
    max-width: 350px;
`
const ExtraSkillIcon = styled.svg`
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.primary};
`

const Text = styled.span`
    line-height: 1.2;
`

export {ExtraSkillItemStyled}
export const S = {ExtraSkillIcon, Text}