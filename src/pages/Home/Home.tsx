import {Hero} from "@/pages/Home/sections/hero/Hero.tsx";
import {Career} from "@/pages/Home/sections/career/Career.tsx";
import {educationData, workData} from "@/data/profBgData.ts";
import {Blog} from "@c/sections/Blog.tsx";

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
            <Blog title='Blog' subtitle='Explore development tips, project highlights, and industry trends.'/>
        </>
    );
};
