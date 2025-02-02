import styled from "styled-components";
import {media} from "@/styles/Theme";

import {Heading} from "@c/UI/Heading";
import {ColorText} from "@c/ComponentStyles";

const Item = styled.div`
    display: flex;
    gap: 35px;
    padding: 35px 25px;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};

    ${media.max('md')} {
        flex-direction: column;
    }

    ${media.max('sm')} {
        padding: 25px 0;
    }

    &:first-of-type {
        padding-top: 0;
    }

    &:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
    }
`

const InfoTitle = styled(Heading)`
    margin-bottom: 15px;
`

const Info = styled.div`
    max-width: 330px;
    width: 100%;
    flex-shrink: 0;

    ${media.max('xxl')} {
        max-width: 270px;
    }

    ${media.max('md')} {
        max-width: initial;
    }
`

const InfoColorText = styled(ColorText)`
`

const InfoWork = styled.div`
    ${InfoTitle} {
        display: flex;
        flex-direction: column;

        ${InfoColorText} {
            font-size: .8em;
            font-weight: 400;
        }
    }

    ${media.range('sm', 'md')} {
        display: grid;
        grid-template: repeat(2, auto) / 1fr auto;
        grid-auto-flow: column;
        column-gap: 30px;
    }
`

const InfoEducation = styled.div`
    ${media.range('sm', 'md')} {
        display: grid;
        grid-template: repeat(2, auto) / 1fr auto;
        grid-auto-flow: column;
        column-gap: 30px;
    }
`

const Company = styled(Heading)`
    display: flex;
    align-items: baseline;
    gap: 2px 10px;
    margin-bottom: 30px;

    ${media.max('xxl')} {
        flex-direction: column;
    }

    ${media.range('sm', 'md')} {
        margin-bottom: 0;
    }

    span {
        display: block;
    }
`

const CompanyName = styled.span`
    color: ${({theme}) => theme.colors.secondary};
`

const Mode = styled.span`
    font-size: .8em;
    text-transform: capitalize;
    text-wrap: nowrap;
`

const Period = styled.div`
    display: flex;
    column-gap: 5px;
    width: fit-content;
    font-size: .9rem;
    padding: 8px 20px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.radius};

    ${media.range('sm', 'md')} {
        align-self: flex-start;
    }

    span {
        text-transform: capitalize;
    }
`

const Content = styled.div``

const Title = styled(Heading)`
    position: relative;
    padding-bottom: 10px;

    &::after {
        content: '';
        display: block;
        width: 200px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    }
`

const Text = styled.p`
    margin-top: 10px;
`

export const S = {
    Item,
    InfoTitle,
    InfoColorText,
    Info,
    InfoWork,
    InfoEducation,
    Company,
    CompanyName,
    Mode,
    Period,
    Content,
    Title,
    Text
}