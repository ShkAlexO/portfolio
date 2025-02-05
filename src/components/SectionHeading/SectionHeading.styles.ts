import styled from "styled-components";
import {media} from "@/styles/Theme";

export const SectionHeadingStyled = styled.div`
    text-align: center;
    max-width: 650px;
    margin: 0 auto 50px;

    ${media.max('md')} {
        margin-bottom: 40px;
    }
`

export const Title = styled.h2`
    position: relative;
    font-size: calc(${({theme}) => theme.titleFs.h2.default} * 1.2);
    padding-bottom: 10px;
    margin-bottom: 20px;

    ${media.max('xxl')} {
        font-size: calc(${({theme}) => theme.titleFs.h2.xxl} * 1.1);;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        border-bottom: 2px solid ${({theme}) => theme.colors.secondary};
    }
`

export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin: 10px auto 0;

    ${media.min('xs')} {
        max-width: 90%;
    }
`

export const S = {
    Title, Subtitle
}