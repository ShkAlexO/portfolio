import styled from "styled-components";
import {Link} from "react-router-dom";

import {BoxWrapStyles} from "@c/ComponentStyles.ts";
import {Heading} from "@c/UI/Heading.tsx";
import {media} from "@/styles/Theme.ts";

export type PostCardPropsType = {
    id: string | number
    image: string
    title: string
    text: string
}

export const PostCard = ({image, title, text}: PostCardPropsType) => {
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
        ${media.max('xxl')} { 
            height: 14vw;
        }
        ${media.max('xxl')} {
            height: 14vw;
        }
        ${media.max('xl')} {
            height: 16.5vw;
        }
        ${media.max('lg')} {
            height: 18vw;
        }
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