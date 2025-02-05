import {forwardRef, HTMLAttributes} from "react";

import {ScrollBox} from "@c/ScrollBox/ScrollBox";
import {AboutMe} from "@sbc/AboutMe/AboutMe";
import {PersonalDetails} from "@sbc/PersonalDetails/PersonalDetails";
import {SkillsProgress} from "@sbc/SkillsProgress/SkillsProgress";

import {userData} from "@/data/userData";
import {S} from "@/layout/sidebar/Sidebar.styles";

export const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, sidebarRef) => {
    const skills = userData.skills
    const languages = userData.languages

    return (
        <ScrollBox as="aside"
                   ref={sidebarRef}
                   $scrollBoxStyles={S.scrollBoxStyles}
                   $wrapStyles={S.wrapStyles}
                   $innerStyles={S.innerStyles}
                   {...props}>
            <S.SidebarInner>
                <AboutMe/>
                <PersonalDetails/>
                <SkillsProgress title='Skills' list={skills}/>
                <SkillsProgress title='Languages' list={languages}/>
            </S.SidebarInner>
        </ScrollBox>
    );
});