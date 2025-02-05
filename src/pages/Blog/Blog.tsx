import {useEffect, useState} from "react";

import {usePosts} from "@/hooks/usePosts";
import {BLOG_ENDPOINT} from "@/services/postService";

import {Container} from "@c/UI/Container/Container";
import {SectionHeading} from "@c/SectionHeading/SectionHeading";
import {ColumnGrid} from "@c/UI/ColumnGrid/ColumnGrid";
import {CategoryTabs} from "@c/CategoryTabs/CategoryTabs";
import {Preloader} from "@c/Preloader/Preloader";

import {S} from "@/pages/Blog/Blog.styles"

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
        <S.Wrap>
            <Container>
                <S.Inner>
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
                </S.Inner>
            </Container>
        </S.Wrap>
    );
}