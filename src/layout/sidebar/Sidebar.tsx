import styled, {css} from "styled-components";
import {AboutMe} from "@sbc/AboutMe.tsx";
import {PersonalDetails} from "@sbc/PersonalDetails.tsx";
import {SkillsProgress} from "@sbc/SkillsProgress/SkillsProgress.tsx";
import {userData} from "@/data/userData.ts";
import { ScrollBox} from "@c/ScrollBox.tsx";

export const Sidebar = () => {
    const skills = userData.skills
    const languages = userData.languages

    return (
        <ScrollBox as="aside" innerStyles={customInnerStyles}>
            <SidebarInner>
                <AboutMe/>
                <PersonalDetails/>
                <SkillsProgress title='Skills' list={skills}/>
                <SkillsProgress title='Languages' list={languages}/>
            </SidebarInner>
        </ScrollBox>
    );
};

const customInnerStyles = css`
    direction: rtl;
`

const SidebarInner = styled.div`
    direction: ltr;
    line-height: 1;
    font-size: .9rem;
    padding: 0 30px;
    > div {
        padding: 25px 8px;
        border-bottom: 1px solid rgb(255 255 255 / 40%);

        &:first-of-type {
            padding-top: 0;
        }

        &:last-of-type {
            padding-bottom: 0;
            border-bottom: 0;
        }
    }
`

