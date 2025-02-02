import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles";
import {media} from "@/styles/Theme";

const Career = styled.section`
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

export const S ={
    Career,
    List
}

