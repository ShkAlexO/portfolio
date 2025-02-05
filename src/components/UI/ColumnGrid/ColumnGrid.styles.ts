import styled from "styled-components";
import {media} from "@/styles/Theme";

export const ColumnGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 20px;

    ${media.max('xxl')} {
        column-gap: 15px;
    }

    ${media.max('md')} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        overflow: hidden;
    }

    ${media.max('sm')} {
        grid-template-columns: 1fr;
    }
`