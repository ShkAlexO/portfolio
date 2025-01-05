import styled from "styled-components";
import {Card} from "./Card.tsx";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills title !!!</SectionTitle>
            <div>
                <Card iconId='logo' title='title 1' text='text 1'/>
                <Card iconId='logo2' title='title 2' text='text 2'/>
                <Card iconId='logo3' title='title 3' text='text 3'/>
            </div>
        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    background-color: darkgrey;
`