import styled from "styled-components";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading";
import {ButtonLink} from "@c/ComponentStyles";
import {ColumnGrid} from "@c/UI/ColumnGrid";
import {Container} from "@c/UI/Container";
import {media} from "@/styles/Theme";
import {StyledPostCard} from "@c/PostCard";
import {usePosts} from "@/hooks/usePosts";

export const LastPosts = ({title, subtitle}: SectionHeadingPropsType) => {
    const {posts, loading} = usePosts();

    if (loading || !posts.length) {
        return null;
    }

    const lastPosts = posts.slice(-3);

    return (
        loading
            ? <div>Loading</div>
            : <StyledLastPosts>
                <Container>
                    <SectionHeading title={title} subtitle={subtitle}/>
                    <ColumnGrid list={lastPosts}/>
                    <ButtonLink to='/blog'>Go to Blog</ButtonLink>
                </Container>
            </StyledLastPosts>
    )
}

const StyledLastPosts = styled.section`
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




