import styled from "styled-components";
import {media} from "@/styles/Theme";

import {PreloaderStyled} from "@c/Preloader/Preloader.styles";
import {Heading} from "@c/UI/Heading";
import {ButtonStyles} from "@c/ComponentStyles";

const Wrap = styled.article`
    display: grid;
    min-height: 100%;

    ${PreloaderStyled} {
        margin: auto;
    }
`

const Inner = styled.div``

const Title = styled(Heading)`
    max-width: 750px;
`

const Category = styled(Heading)`
    ${ButtonStyles};
    cursor: initial;
    font-weight: 400;
    width: fit-content;
    padding: 10px 25px;
    border: none;
    margin-bottom: 30px;
    border-radius: 20px;
    text-transform: capitalize;

    ${media.max('md')} {
        padding: 10px 20px;
        max-width: fit-content;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }
`

const Content = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.primary};
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    padding: 40px 0;
    margin-bottom: 60px;

    &::after {
        content: "";
        display: block;
        clear: both;
    }

    p {
        margin-bottom: 1.5rem;
    }
`

const Thumbnail = styled.img`
    width: 100%;
    margin-bottom: 20px;
    height: auto;
    border-radius: ${({theme}) => theme.radius};

    ${media.min('sm')} {
        width: 45%;
        float: right;
        margin-left: 20px;
        margin-bottom: 20px;
    }
`

export const S = {
    Wrap, Inner, Title, Category, Content, Thumbnail
}