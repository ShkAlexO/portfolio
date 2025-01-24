import styled from "styled-components";
import {PostCard, PostCardPropsType} from "@c/PostCard.tsx";
import {media} from "@/styles/Theme.ts";

type ColumnGridPropsType = {
    list: PostCardPropsType[]
}

export const ColumnGrid = ({list}: ColumnGridPropsType) => {
    return (
        list && <StyledColumnGrid>
            {list.map((item) => <PostCard key={item.id} {...item}/>)}
        </StyledColumnGrid>
    )
}

const StyledColumnGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 20px;
    ${media.max('xxl')} {
       column-gap: 15px;
    }
    ${media.max('md')} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        overflow: hidden;
    }
`