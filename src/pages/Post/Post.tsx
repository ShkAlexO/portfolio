import {useParams} from "react-router-dom";
import {Container} from "@c/UI/Container";
import {usePosts} from "@/hooks/usePosts";
import {Preloader, StyledPreloader} from "@c/Preloader";
import styled from "styled-components";
import {Heading} from "@c/UI/Heading";
import {media} from "@/styles/Theme";
import {ButtonStyles} from "@c/ComponentStyles";
import {LastPosts} from "@c/sections/LastPosts/LastPosts.tsx";
import {BLOG_ENDPOINT} from "@/services/postService";

export const Post = () => {
    const {postId} = useParams<{ postId: string }>();
    const {posts, loading} = usePosts(BLOG_ENDPOINT);
    const post = posts.find(({id}) => String(id) === postId);

    if (!post) {
        return;
    }

    const {id, title, category, image, text} = post;

    return (
        <Wrap>
            {loading ? <Preloader/> :
                <Inner>
                    <Container>
                        {title && <Title as="h1">{title}</Title>}
                        {category && <Category as="h2" fontSize="h6">{category}</Category>}
                        {(image || text) && <Content>
                            {image && <Thumbnail src={image} alt={title || 'Post Thumbnail'}/>}
                            {text && <p>{text}</p>}
                        </Content>}
                    </Container>

                    <LastPosts currentPostId={id} currentCategory={category} title={`Similar Posts in "${category}"`}
                               subtitle='Catch up on the latest insights, updates, and trends from our blog.'/>
                </Inner>}
        </Wrap>
    )
};

const Wrap = styled.article`
    display: grid;
    min-height: 100%;

    ${StyledPreloader} {
        margin: auto;
    }
`

const Inner = styled.div``

const Title = styled(Heading)`
    max-width: 750px;
`
const Category = styled(Heading)`
    ${ButtonStyles};
    cursor: initial;
    font-weight: 400;
    width: fit-content;
    padding: 10px 25px;
    border: none;
    margin-bottom: 30px;
    border-radius: 20px;
    text-transform: capitalize;

    &:hover {
        &::before {
            opacity: 1;
        }
    }
`

const Content = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.primary};
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    padding: 40px 0;
    margin-bottom: 60px;

    &::after {
        content: "";
        display: block;
        clear: both;
    }
`

const Thumbnail = styled.img`
    width: 100%;
    margin-bottom: 20px;
    height: auto;
    border-radius: ${({theme}) => theme.radius};

    ${media.min('sm')} {
        width: 45%;
        float: right;
        margin-left: 20px;
        margin-bottom: 20px;
    }
`
