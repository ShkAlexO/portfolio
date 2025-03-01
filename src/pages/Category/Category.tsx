import {useNavigate, useParams} from 'react-router-dom';

import {usePosts} from "@/hooks/usePosts";
import {BLOG_ENDPOINT} from "@/services/postService";
import {ROUTES} from "@/constants/routes";

import {Preloader} from "@c/Preloader/Preloader";
import {Container} from "@c/UI/Container/Container";
import {ColumnGrid} from "@c/UI/ColumnGrid/ColumnGrid";

import {S} from "@/pages/Category/Category.styles"

export const Category = () => {
    const {categoryId} = useParams();
    const {posts, loading} = usePosts(BLOG_ENDPOINT);
    const navigate = useNavigate();

    if (!posts.length) return null;

    const filteredPosts = posts.filter(({category}) => category === categoryId);

    if (filteredPosts.length === 0) {
        navigate(ROUTES.BLOG);
        return null;
    }

    return (
        <S.Wrap>
            {loading ? <Preloader/> : (
                <Container>
                    <S.Inner>
                        <S.Title title={categoryId}/>
                        <ColumnGrid list={filteredPosts}/>
                    </S.Inner>
                </Container>
            )}
        </S.Wrap>
    );
};