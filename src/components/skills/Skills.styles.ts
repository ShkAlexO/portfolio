import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";

const Skills = styled.div`
    ${BoxWrapStyles};
    grid-column: 1 / -1;
    background: linear-gradient(90deg, ${({theme}) => theme.colors.darkBlue} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
`

const Inner = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    width: fit-content;
    margin: 0 auto;
    align-items: center;
    gap: 70px;
    ${media.max('xxl')} {
        gap: 35px;
    }
    ${media.max('md')} {
        gap: 25px;
    }
    ${media.max('sm')} {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`


const Title = styled.h3`
    color: inherit;
    width: fit-content;
    max-width: 200px;
    margin-bottom: 0;
    ${media.max('md')} {
        font-size: 18px;
    }
    ${media.max('sm')} {
        margin: 0 auto;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px 40px;
    
    ${media.max('xxl')} {
        column-gap: 30px;
    }
    ${media.max('em')} {
        column-gap: 20px;
    }
    ${media.max('sm')} {
        max-width: 400px;
    }
`

export const S = {
    Skills,
    Inner,
    Title,
    List
}