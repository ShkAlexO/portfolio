import styled from "styled-components";
import {SkillItem} from "@sbc/SkillsProgress/SkillItem.tsx";
import {SkillLangItemPropsType} from "@/data/userData.ts";
import {Heading} from "@c/UI/Heading.tsx";

type SkillProgressPropsType = {
    title: string
    list?: SkillLangItemPropsType[];
};

export const SkillsProgress = ({title, list}: SkillProgressPropsType) => {
    return (
        list && <StyledSkillProgress>
            {title && <Title as='h3' fontSize='h6'>{title}</Title>}
            <SkillsList>
                {list.map((item: SkillLangItemPropsType) => <SkillItem key={item.name} {...item}/>)}
            </SkillsList>
        </StyledSkillProgress>
    )
}

const StyledSkillProgress = styled.div``

const Title = styled(Heading)`
    margin-bottom: 20px;
    padding: 0 10px;
`
const SkillsList = styled.div`
    display: grid;
    row-gap: 15px;
`
