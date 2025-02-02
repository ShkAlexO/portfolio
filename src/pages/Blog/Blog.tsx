import {Container} from "@c/UI/Container";
import {SectionHeading} from "@c/SectionHeading";
import {ColumnGrid} from "@c/UI/ColumnGrid";
import styled from "styled-components";
import {usePosts} from "@/hooks/usePosts";
import {useEffect, useState} from "react";
import {CategoryTabs} from "@c/CategoryTabs";
import {Preloader, StyledPreloader} from "@c/Preloader";
import {BLOG_ENDPOINT} from "@/services/postService";

export const Blog = () => {
    const {posts, loading} = usePosts(BLOG_ENDPOINT);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        if (posts.length > 0) {
            setFilteredPosts(posts);
        }
    }, [posts]);

    const filterPosts = (cat: string) => {
        const currentCat = cat;
        if (currentCat !== "all") {
            setFilteredPosts(posts.filter(({category}) => category === currentCat));
        } else {
            setFilteredPosts(posts);
        }
    };

    return (
        <Wrap>
            <Container>
                <Inner>
                    <SectionHeading
                        title="Tech Insights: A Blog on Development and IT Trends"
                        subtitle="Latest articles, practical tips, and deep dives into modern technologies for developers and IT professionals."
                    />

                    {loading ? <Preloader/> :
                        (posts.length > 0
                                ? (<>
                                    <CategoryTabs posts={posts} filterPosts={filterPosts}/>
                                    <ColumnGrid list={filteredPosts}/>
                                </>)
                                : <div>No posts available</div>
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