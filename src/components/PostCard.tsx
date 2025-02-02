import styled from "styled-components";
import {Link} from "react-router-dom";

import {BoxWrapStyles} from "@c/ComponentStyles";
import {Heading} from "@c/UI/Heading";
import {media} from "@/styles/Theme";

export type PostCardPropsType = {
    id: string | number
    category: string
    image: string
    title: string
    text: string
}

export const PostCard = ({id, category, image, title, text}: PostCardPropsType) => {
    return (
        <StyledPostCard>
            <img src={image} alt={title}/>
            <Info>
                <Title as='h3' fontSize='h5'>{title}</Title>
                <Text>{text}</Text>
                <InfoLink to={`/blog/${encodeURIComponent(category)}/${encodeURIComponent(id)}`}>Continue Reading</InfoLink>
            </Info>
        </StyledPostCard>
    )
}

export const StyledPostCard = styled.div`
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
        ${media.max('md')} {
            height: 23vw;
        }
        ${media.max('sm')} {
            height: 37vw;
        }
        ${media.max('xs')} {
            height: 45vw;
        }
        ${media.max('em')} {
            height: 50vw;
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    ${media.max('em')} {
        padding: 20px 10px;
    }
`

const Title = styled(Heading)`
    line-height: 1.3;
    margin-bottom: 15px;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    ${media.min('sm')} {
        min-height: 2.6em;
    }
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