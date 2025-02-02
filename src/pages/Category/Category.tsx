import {useParams} from 'react-router-dom';
import {usePosts} from "@/hooks/usePosts";
import {ColumnGrid} from "@c/UI/ColumnGrid";
import {Preloader, StyledPreloader} from "@c/Preloader";
import styled from "styled-components";
import {Container} from "@c/UI/Container.tsx";
import {SectionHeading} from "@c/SectionHeading.tsx";
import {BLOG_ENDPOINT} from "@/services/postService.ts";

export const Category = () => {
    const {categoryId} = useParams();
    const {posts, loading} = usePosts(BLOG_ENDPOINT);

    if (!posts.length) {
        return null;
    }

    const filteredPosts = posts.filter(({category}) => category === categoryId);

    return (
        <Wrap>
            {loading ? <Preloader/> : (
                <Container>
                    <Inner>
                        <Title title={categoryId}/>
                        <ColumnGrid list={filteredPosts}/>
                    </Inner>
                </Container>
            )}
        </Wrap>
    );
};

const Wrap = styled.div`
    display: grid;
    min-height: 100%;

    ${StyledPreloader} {
        margin: auto;
    }
`
const Inner = styled.div``
const Title = styled(SectionHeading)`
    text-align: center;
`