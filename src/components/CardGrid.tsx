import styled from "styled-components";
import {Link} from "react-router-dom";
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";
import {Heading} from "@c/Heading.tsx";


type CardGridPropsType = {
    list: PostCardPropsType[]
}

type PostCardPropsType = {
    id: string | number
    image: string
    title: string
    text: string
}

const PostCard = ({image, title, text}: PostCardPropsType) => {
    return (
        <StyledPostCard>
            <img src={image} alt={title}/>
            <Info>
                <Title as='h3' fontSize='h5'>{title}</Title>
                <Text>{text}</Text>
                <InfoLink to="#">Continue Reading</InfoLink>
            </Info>
        </StyledPostCard>
    )
}

export const CardGrid = ({list}: CardGridPropsType) => {
    return (
        list && <StyledCardGrid>
            {list.map((item: PostCardPropsType) => <PostCard key={item.id} {...item}/>)}
        </StyledCardGrid>
    )
}

const StyledCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 20px;
`

const StyledPostCard = styled.div`
    ${BoxWrapStyles};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0;

    * {
        margin: 0;
    }

    img {
        display: block;
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
`

const Title = styled(Heading)`
    line-height: 1.3;
    min-height: 2.6em;
    margin-bottom: 15px;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`

const Text = styled.p`
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-bottom: 20px;
`

const InfoLink = styled(Link)`
    display: block;
    width: fit-content;
    margin-top: auto;
`




