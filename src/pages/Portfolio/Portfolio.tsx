import {usePosts} from "@/hooks/usePosts";
import {PROJECTS_ENDPOINT} from "@/services/postService";

import {Preloader} from "@c/Preloader/Preloader";
import {Container} from "@c/UI/Container/Container";
import {SectionHeading} from "@c/SectionHeading/SectionHeading";
import {ProjectCard, ProjectPropsType} from "@c/ProjectCard/ProjectCard";

import {S} from "@/pages/Portfolio/Portfolio.styles"

export const Portfolio = () => {
    const {posts, loading} = usePosts(PROJECTS_ENDPOINT);

    return (
        <S.Wrap>
            <Container>
                <S.Inner>
                    <SectionHeading
                        title="My Latest Projects"
                        subtitle="Explore the websites I've developed, showcasing a variety of styles, functionality, and designs."
                    />

                    {loading ? <Preloader/> : (
                        posts.length > 0 ? (
                            posts.map((post: ProjectPropsType) => {
                                const {id, ...rest} = post;

                                return (
                                    <ProjectCard key={id} id={id} {...rest}/>
                                );
                            })
                        ) : (
                            <div>No posts available</div>
                        )
                    )}

                </S.Inner>
            </Container>
        </S.Wrap>
    );
}