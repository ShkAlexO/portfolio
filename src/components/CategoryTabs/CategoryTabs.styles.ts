import styled from "styled-components";
import {BoxWrapStyles, HorizontalScrollbarStyles} from "@c/ComponentStyles";

const CategoryTabsStyled = styled.div`
    ${BoxWrapStyles};
    position: relative;
    display: grid;
    width: fit-content;
    height: auto;
    overflow: hidden;
    padding: 0;
    margin: 0 auto 60px;

    button {
        padding: 10px 20px;
        white-space: nowrap;
        min-width: max-content;
        max-width: max-content;
        text-transform: capitalize;
    }
`

const Inner = styled.div`
    ${HorizontalScrollbarStyles};
    display: flex;
    gap: 12px;
    overflow-y: auto;
    padding: 10px var(--scroll-box-padding);
`

export {CategoryTabsStyled, Inner}