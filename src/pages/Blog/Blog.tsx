import {Container} from "@c/UI/Container";
import {SectionHeading, StyledSectionHeading} from "@c/SectionHeading";
import {ColumnGrid} from "@c/UI/ColumnGrid";
import styled from "styled-components";
import {usePosts} from "@/hooks/usePosts";
import {useEffect, useState} from "react";
import {CategoryTabs} from "@c/CategoryTabs.tsx";

export const Blog = () => {
    const {posts, loading} = usePosts();
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        if (posts.length > 0) {
            setFilteredPosts(posts);
        }
    }, [posts]);

    const filterPosts = (cat:string) => {
        const currentCat = cat;
        if (currentCat !== "all") {
            setFilteredPosts(posts.filter(({ category }) => category === currentCat));
        } else {
            setFilteredPosts(posts);
        }
    };

    return (
        <StyledBlog>
            <Container>
                <SectionHeading
                    title='Tech Insights: A Blog on Development and IT Trends'
                    subtitle='Latest articles, practical tips, and deep dives into modern technologies for developers and IT professionals.'
                />

                {posts.length > 0 && <CategoryTabs posts={posts} filterPosts={filterPosts}/>}

                {loading
                    ? <div>Loading...</div>
                    : (filteredPosts.length > 0
                        ? (<ColumnGrid list={filteredPosts}/>)
                        : (<div>No posts available</div>))
                }
            </Container>
        </StyledBlog>
    )
}

const StyledBlog = styled.div`
    ${StyledSectionHeading} {
        max-width: 650px;
    }
`