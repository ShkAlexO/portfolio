import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";

const Image = styled.div`
    position: relative;

    ${media.max('md')} {
        grid-row: 1 / 2;
        height: 28vw;
    }

    ${media.max('sm')} {
        height: 220px;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: ${({theme}) => theme.colors.primaryDark};
        opacity: .6;
    }

    img {
        display: block;
        object-fit: cover;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }
`

const ProjectCardStyled = styled.article`
    ${BoxWrapStyles};
    display: grid;
    padding: 0;
    overflow: hidden;
    margin-bottom: 30px;

    ${media.min('md')} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media.max('md')} {
        height: auto;
        grid-template-rows: auto 1fr;
    }

    ${media.range('md', 'lg')} {
        grid-template-columns: 1.3fr 1fr;
    }

    &:nth-of-type(even) {
        ${media.range('md', 'lg')} {
            grid-template-columns: 1fr 1.3fr;
        }

        ${Image} {
            ${media.min('md')} {
                grid-column: 1 / 2;
                grid-row: 1 / 2;
            }
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const Content = styled.div`
    padding: 60px 45px;
    align-content: center;

    ${media.min('md')} {
        min-height: 450px;
    }

    ${media.range('xl', 'xxl')} {
        padding-inline: 25px;
    }

    ${media.max('lg')} {
        padding: 20px;
    }

    ${media.max('xs')} {
        font-size: .92rem;
        padding: 15px 10px;
    }
`

const ContentInner = styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px 10px;
    margin-bottom: 12px;

    ${media.max('xs')} {
        &[data-highlight='true'] {
            flex-direction: column;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
`

const DetailItem = styled.p`
    padding: 3px 12px;
    border-radius: 50px;
    background: linear-gradient(90deg, ${({theme}) => theme.colors.colorSt} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
    font-size: .915rem;

    ${media.max('xs')} {
        font-size: .9em;
    }
`

const Label = styled.p`
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};

    &::first-letter {
        text-transform: uppercase;
    }
`

export {ProjectCardStyled}

export const S = {
    Image, Content, ContentInner, Details, DetailItem, Label
}