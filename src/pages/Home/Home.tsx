import {educationData, workData} from "@/data/profBgData";

import {Hero} from "@/pages/Home/sections/RenameHero/Hero";
import {Career} from "@c/sections/Career/Career";
import {LastPosts} from "@c/sections/LastPosts/LastPosts";

export const Home = () => {
    return (
        <>
            <Hero/>
            <Career
                title='Education'
                subtitle='Education and Skills Development.'
                list={educationData}
                listType='education'
            />
            <Career
                title='Work History'
                subtitle='Professional Roles and Companies'
                list={workData}
                listType='work'
            />
            <LastPosts
                title='Blog'
                subtitle='Explore development tips, project highlights, and industry trends.'/>
        </>
    );
};