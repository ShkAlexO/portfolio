import {FC} from "react";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading.tsx";
import {ButtonLink} from "@c/ComponentStyles";
import {ColumnGrid} from "@c/UI/ColumnGrid";
import {Container} from "@c/UI/Container";
import {usePosts} from "@/hooks/usePosts";
import {Preloader} from "@c/Preloader";
import {BLOG_ENDPOINT} from "@/services/postService";
import {S} from "./LastPosts.styles";

type LastPostsPropsType = SectionHeadingPropsType & {
    currentPostId?: string
    currentCategory?: string;
}
export const LastPosts: FC<LastPostsPropsType> = (
    {
        title,
        subtitle,
        currentPostId,
        currentCategory
    }: LastPostsPropsType) => {
    const {posts, loading} = usePosts(BLOG_ENDPOINT);

    if (!posts.length) {
        return null;
    }

    let filteredPosts = posts;

    if (currentCategory) {
        filteredPosts = posts
            .filter(({category, id}) => category === currentCategory && id !== currentPostId)
            .sort(() => Math.random() - 0.5)
    }

    const lastPosts = currentCategory
        ? filteredPosts.slice(0, 3) : posts.slice(-3);

    return (
        <S.LastPosts>
            {loading ? <Preloader/> : (
                <Container>
                    <SectionHeading title={title} subtitle={subtitle}/>
                    <ColumnGrid list={lastPosts}/>
                    <ButtonLink to='/blog'>Go to Blog</ButtonLink>
                </Container>
            )}
        </S.LastPosts>
    );
}