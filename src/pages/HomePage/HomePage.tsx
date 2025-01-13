import {Hero} from "./sections/hero/Hero.tsx";
import {Career} from "./sections/career/Career.tsx";
import {educationData, workData} from "../../data/professionalBackgroundData.ts";

export const HomePage = () => {
    return (
        <>
            <Hero/>
            <Career
                title='Education'
                subtitle='An overview of the professional journey and key achievements.'
                list={educationData}
            />
            <Career
                title='Work History'
                subtitle='Professional experience and career development.'
                list={workData}
            />
        </>
    );
};
