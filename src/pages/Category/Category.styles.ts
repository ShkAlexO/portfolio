import styled from "styled-components";
import {SectionHeading} from "@c/SectionHeading/SectionHeading";
import {PreloaderStyled} from "@c/Preloader/Preloader.styles";

const Wrap = styled.div`
    display: grid;
    min-height: 100%;

    ${PreloaderStyled} {
        margin: auto;
    }
`
const Inner = styled.div``

const Title = styled(SectionHeading)`
    text-align: center;
`

export const S = {
    Wrap, Inner, Title
}