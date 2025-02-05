import {PostCard, PostCardPropsType} from "@c/PostCard/PostCard";
import {ColumnGridStyled} from "@c/UI/ColumnGrid/ColumnGrid.styles"

type ColumnGridPropsType = {
    list: PostCardPropsType[]
}

export const ColumnGrid = ({list}: ColumnGridPropsType) => {
    return (
        list && <ColumnGridStyled>
            {list.map((item) => <PostCard key={item.id} {...item}/>)}
        </ColumnGridStyled>
    )
}