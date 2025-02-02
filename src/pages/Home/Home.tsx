import {Hero} from "@/pages/Home/sections/hero/Hero";
import {Career} from "@c/sections/career/Career";
import {educationData, workData} from "@/data/profBgData";
import {LastPosts} from "@c/sections/LastPosts/LastPosts.tsx";


export const Home = () => {
    return (
        <>
            <Hero/>
            <Career
                title='Education'
                subtitle='An overview of the professional journey and key achievements.'
                list={educationData}
                listType='education'
            />
            <Career
                title='Work History'
                subtitle='Professional experience and career development.'
                list={workData}
                listType='work'
            />
            <LastPosts title='Blog' subtitle='Explore development tips, project highlights, and industry trends.'/>
        </>
    );
};
