import {FC} from "react";
import {usePosts} from "@/hooks/usePosts";

import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading/SectionHeading";
import {ColumnGrid} from "@c/UI/ColumnGrid/ColumnGrid";
import {Container} from "@c/UI/Container/Container";
import {Preloader} from "@c/Preloader/Preloader";

import {ButtonLink} from "@c/ComponentStyles";
import {LastPostsStyled} from "@c/sections/LastPosts/LastPosts.styles"

import {BLOG_ENDPOINT} from "@/services/postService";
import {useResponsiveVisibility} from "@/hooks/useResponsiveVisibility";
import {commonStyles} from "@/styles/Theme";
import {ROUTES} from "@/constants/routes";

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
    const isMobileView = useResponsiveVisibility(commonStyles.breakpoint.md);

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
        ? filteredPosts.slice(0, isMobileView ? 2 : 3)
        : posts.slice(isMobileView ? -2 : -3);

    return (
        <LastPostsStyled>
            {loading ? <Preloader/> : (
                <Container>
                    {!(currentCategory && lastPosts.length === 0) && (
                        <SectionHeading title={title} subtitle={subtitle}/>
                    )}
                    <ColumnGrid list={lastPosts}/>
                    <ButtonLink to={ROUTES.BLOG}>Go to Blog</ButtonLink>
                </Container>
            )}
        </LastPostsStyled>
    );
}