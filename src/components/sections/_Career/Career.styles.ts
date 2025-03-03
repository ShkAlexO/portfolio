import styled from "styled-components";
import {media} from "@/styles/Theme";
import {BoxWrapStyles} from "@c/ComponentStyles";

const CareerStyled = styled.section`
`

const List = styled.div`
    ${BoxWrapStyles};
    padding: 40px 20px;

    ${media.min('full')} {
        padding: 50px;
    }

    ${media.max('xs')} {
        padding: 20px 10px;
    }
`

export {CareerStyled, List}