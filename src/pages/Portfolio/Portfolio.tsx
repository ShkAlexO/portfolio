import {Container} from "@c/UI/Container";
import {SectionHeading} from "@c/SectionHeading";
import styled from "styled-components";
import {usePosts} from "@/hooks/usePosts.ts";
import {Preloader, StyledPreloader} from "@c/Preloader.tsx";
import {PROJECTS_ENDPOINT} from "@/services/postService.ts";
import {ProjectCard, ProjectPropsType} from "@c/ProjectCard.tsx";


export const Portfolio = () => {
    const {posts, loading} = usePosts(PROJECTS_ENDPOINT);

    return (
        <Wrap>
            <Container>
                <Inner>
                    <SectionHeading
                        title="My Latest Projects"
                        subtitle="Explore the websites I've developed, showcasing a variety of styles, functionality, and designs."
                    />

                    {loading ? <Preloader/> : (
                        posts.length > 0 ? (
                            posts.map((post: ProjectPropsType) => {
                                const { id, ...rest } = post;

                                return (
                                    <ProjectCard key={id} id={id} {...rest}/>
                                );
                            })
                        ) : (
                            <div>No posts available</div>
                        )
                    )}

                </Inner>
            </Container>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: grid;
    min-height: 100%;

    ${StyledPreloader} {
        margin: auto;
    }
`
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
