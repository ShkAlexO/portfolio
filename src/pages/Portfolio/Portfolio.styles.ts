import styled from "styled-components";
import {PreloaderStyled} from "@c/Preloader/Preloader.styles";

const Wrap = styled.div`
    display: grid;
    min-height: 100%;

    ${PreloaderStyled} {
        margin: auto;
    }
`
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const S = {
    Wrap, Inner
}