import styled from "styled-components";
import {media} from "@/styles/Theme";

export const ContainerStyled = styled.div`
    max-width: 1430px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    ${media.max('xs')} {
        padding: 0 7px;
    }
`