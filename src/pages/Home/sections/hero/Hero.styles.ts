import styled from "styled-components";
import {media} from "@/styles/Theme";
import {ButtonLink, ColorText} from "@c/ComponentStyles";

import {IconStyled} from "@c/UI/Icon";

const HeroStyled = styled.section``

const Inner = styled.div`
    padding: 0;
    display: grid;
    margin-bottom: 50px;

    ${media.min('sm')} {
        grid-template-columns: 1.3fr 1fr;
    }

    > ${ButtonLink} {
        margin: 30px auto 0;
    }
`

const Content = styled.div`
    min-height: 550px;
    align-content: center;
    padding: 35px;

    ${media.max('md')} {
        padding: 0 0 30px;
        min-height: 365px;
    }

    ${media.max('sm')} {
        padding: 0;
        margin-bottom: 15px;
        min-height: auto;
    }
`

const Title = styled.h1`
    font-size: calc(${({theme}) => theme.titleFs.h1.default} * 1.5);
    font-weight: 500;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.colorSd};
    margin-bottom: 20px;

    ${media.max('xxl')} {
        font-size: calc(${({theme}) => theme.titleFs.h1.xxl} * 1.4);;
    }

    ${media.max('md')} {
        font-size: calc(${({theme}) => theme.titleFs.h1.xxl} * 1.2);;
    }

    ${media.max('xs')} {
        font-size: ${({theme}) => theme.titleFs.h1.xxl};
    }

    ${ColorText} {
        display: block;
    }
`

const Text = styled.p`
    font-size: 1.2rem;
    max-width: 450px;
    margin-bottom: 40px;

    ${media.max('sm')} {
        margin-bottom: 0;
    }
`
const Image = styled.img`
    display: block;
    object-fit: contain;
    width: 100%;
    max-width: 380px;
    height: auto;
    margin: 0 auto;

    ${media.min('sm')} {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        max-height: 100%;
    }

    ${media.max('md')} {
        max-width: 250px;
    }
`

const ImageBox = styled.div`
    position: relative;
    height: inherit;

    ${IconStyled} {
        position: absolute;
        z-index: -1;
        bottom: -150px;
        left: 50%;
        transform: translateX(-55%);
        width: 700px;
        height: 620px;
        stroke: ${({theme}) => theme.colors.primary};

        ${media.max('md')} {
            width: 390px;
            height: 400px;
            bottom: -100px;
        }

        ${media.max('sm')} {
            width: 600px;
            height: 600px;
            bottom: -75px;
            transform: translateX(-35%);
        }
    }
`

export {HeroStyled}
export const S = {
    Inner, Content, Title, Text, ImageBox, Image
}