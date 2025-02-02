import styled from "styled-components";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading";
import {ButtonLink} from "@c/ComponentStyles";
import {ColumnGrid} from "@c/UI/ColumnGrid";
import {Container} from "@c/UI/Container";
import {media} from "@/styles/Theme";
import {StyledPostCard} from "@c/PostCard";
import {usePosts} from "@/hooks/usePosts";
import {Preloader} from "@c/Preloader";
import {BLOG_ENDPOINT} from "@/services/postService.ts";

type LastPostsPropsType = SectionHeadingPropsType & {
    currentPostId?: string
    currentCategory?: string;
}
export const LastPosts = ({title, subtitle, currentPostId, currentCategory}: LastPostsPropsType) => {
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

    const lastPosts = currentCategory ? filteredPosts.slice(0, 3) : posts.slice(-3);

    return (
        <Wrap>
            {loading ? <Preloader/> : (
                <Container>
                    <SectionHeading title={title} subtitle={subtitle}/>
                    <ColumnGrid list={lastPosts}/>
                    <ButtonLink to='/blog'>Go to Blog</ButtonLink>
                </Container>
            )}
        </Wrap>
    )
}

const Wrap = styled.section`
    ${ButtonLink} {
        margin: 60px auto 0;

        ${media.max('lg')} {
            margin-top: 40px;
        }
    }

    ${StyledPostCard} {
        &:nth-of-type(3) {
            ${media.max('md')} {
                display: none;
            }
        }
    }
`




