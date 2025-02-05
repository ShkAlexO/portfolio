import {PostCardStyled, S} from "@c/PostCard/PostCard.styles"

export type PostCardPropsType = {
    id: string | number
    category: string
    image: string
    title: string
    text: string
}

export const PostCard = ({id, category, image, title, text}: PostCardPropsType) => {
    return (
        <PostCardStyled>
            <img src={image} alt={title}/>
            <S.Info>
                <S.Title as='h3' fontSize='h5'>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <S.InfoLink to={`/blog/${encodeURIComponent(category)}/${encodeURIComponent(id)}`}>Continue
                    Reading</S.InfoLink>
            </S.Info>
        </PostCardStyled>
    )
}