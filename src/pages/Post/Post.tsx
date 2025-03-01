import {useNavigate, useParams} from "react-router-dom";
import {usePosts} from "@/hooks/usePosts";
import {BLOG_ENDPOINT} from "@/services/postService";
import {ROUTES} from "@/constants/routes";

import {Preloader} from "@c/Preloader/Preloader";
import {Container} from "@c/UI/Container/Container";
import {LastPosts} from "@c/sections/LastPosts/LastPosts.tsx";

import {S} from "@/pages/Post/Post.styles"
import {useEffect} from "react";

export const Post = () => {
    const {postId} = useParams<{ postId: string }>();
    const {posts, loading} = usePosts(BLOG_ENDPOINT);
    const navigate = useNavigate();

    const post = posts.find(({id}) => String(id) === postId);

    useEffect(() => {
        if (!loading && !post) {
            navigate(ROUTES.BLOG);
        }
    }, [post, navigate, loading]);

    if (!post) {
        return null;
    }

    const {id, title, category, image, text} = post;

    return (
        <S.Wrap>
            {loading ? <Preloader/> :
                <S.Inner>
                    <Container>
                        {title && <S.Title as="h1">{title}</S.Title>}
                        {category && <S.Category as="h2" fontSize="h6">{category}</S.Category>}
                        {(image || text) && <S.Content>
                            {image && <S.Thumbnail src={image} alt={title || 'Post Thumbnail'}/>}
                            {text && <div dangerouslySetInnerHTML={{__html: text}}/>}
                        </S.Content>}
                    </Container>

                    <LastPosts currentPostId={id} currentCategory={category}
                               title={`Similar Posts in "${category}"`}
                               subtitle='Catch up on the latest insights, updates, and trends from our blog.'/>
                </S.Inner>}
        </S.Wrap>
    )
};