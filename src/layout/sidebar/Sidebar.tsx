import styled, {css} from "styled-components";
import {AboutMe} from "@sbc/AboutMe.tsx";
import {PersonalDetails} from "@sbc/PersonalDetails.tsx";
import {SkillsProgress} from "@sbc/SkillsProgress/SkillsProgress.tsx";
import {userData} from "@/data/userData.ts";
import { ScrollBox} from "@c/ScrollBox.tsx";
import {media} from "@/styles/Theme.ts";

export const Sidebar = () => {
    const skills = userData.skills
    const languages = userData.languages

    return (
        <ScrollBox as="aside" scrollBoxStyles={scrollBoxStyles} wrapStyles={wrapStyles} innerStyles={innerStyles}>
            <SidebarInner>
                <AboutMe/>
                <PersonalDetails/>
                <SkillsProgress title='Skills' list={skills}/>
                <SkillsProgress title='Languages' list={languages}/>
            </SidebarInner>
        </ScrollBox>
    );
};

const scrollBoxStyles = css`
    position: relative;

    ${media.max('xl')} {
        position: absolute;
        top: -1px;
        left: 0;
        height: calc(100% + 2px);
        z-index: 2;
        transform: translateX(-100%);
        transition: transform .5s ease;

        .js-open-sidebar & {
            transform: translateX(0);
        }
    }
`
const wrapStyles = css`
    ${media.max('xl')} {
        background-color: rgb(${({theme}) => theme.colors.darkRgb});
    }
`

const innerStyles = css`
    direction: rtl;
`

const SidebarInner = styled.div`
    direction: ltr;  
    line-height: 1;
    font-size: .9rem;
    padding: 0 20px 0 15px;
    ${media.max('xxl')} {
        padding: 0 15px 0 10px;
    }
    
    > div {
        padding: 25px 8px;
        border-bottom: 1px solid rgba(${({theme}) => theme.colors.whiteRgb} , .4);

        &:first-of-type {
            padding-top: 0;
        }

        &:last-of-type {
            padding-bottom: 0;
            border-bottom: 0;
        }
    }
`

