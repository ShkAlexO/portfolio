import {FC} from "react";
import {PostCard, PostCardPropsType} from "@c/PostCard/PostCard";
import {ColumnGridStyled} from "@c/UI/ColumnGrid/ColumnGrid.styles"

type ColumnGridPropsType = {
    list: PostCardPropsType[]
}

export const ColumnGrid: FC<ColumnGridPropsType> = ({list}) => {
    if (!list?.length) return null;
    
    return (
        <ColumnGridStyled>
            {list.map((item) => <PostCard key={item.id} {...item}/>)}
        </ColumnGridStyled>
    )
}