import {BASE_URL} from "@/constants/config";
import {forwardRef, HTMLAttributes} from "react";

import {ScrollBox} from "@c/ScrollBox/ScrollBox";
import {AboutMe} from "@sbc/AboutMe/AboutMe";
import {PersonalDetails} from "@sbc/PersonalDetails/PersonalDetails";
import {SkillsProgress} from "@sbc/SkillsProgress/SkillsProgress";
import {ExtraSkills} from "@sbc/ExtraSkills/ExtraSkills";
import {DownloadButton} from "@c/DownloadButton/DownloadButton";

import {userData} from "@/data/userData";
import {S} from "@/layout/_Sidebar/Sidebar.styles";

export const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, sidebarRef) => {
    const skills = userData.skills
    const languages = userData.languages
    const extraSkills = userData.extraSkills

    return (
        <ScrollBox
            as="aside"
            ref={sidebarRef}
            $scrollBoxStyles={S.scrollBoxStyles}
            $wrapStyles={S.wrapStyles}
            $innerStyles={S.innerStyles}
            {...props}>
            <S.SidebarInner>
                <AboutMe/>
                <S.DownloadButtonInner>
                    <DownloadButton text='Download CV' file={`${BASE_URL}assets/Resume.pdf`}/>
                </S.DownloadButtonInner>
                <PersonalDetails/>
                <SkillsProgress title='Skills' list={skills}/>
                <SkillsProgress title='Languages' list={languages}/>
                <ExtraSkills title='Extra Skills' list={extraSkills}/>
            </S.SidebarInner>
        </ScrollBox>
    );
});