import {FC} from "react";
import {PostCardStyled, S} from "@c/PostCard/PostCard.styles"

export type PostCardPropsType = {
    id: string | number
    category: string
    image: string
    title: string
    text: string
}

export const PostCard: FC<PostCardPropsType> = ({id, category, image, title, text}) => {
    return (
        <PostCardStyled>
            <img src={image} alt={title}/>
            <S.Info>
                <S.Title as='h3' fontSize='h5'>{title}</S.Title>
                <S.Text dangerouslySetInnerHTML={{__html: text}}/>
                <S.InfoLink to={`/blog/${encodeURIComponent(category)}/${encodeURIComponent(id)}`}>Continue
                    Reading</S.InfoLink>
            </S.Info>
        </PostCardStyled>
    )
}