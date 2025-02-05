import {ElementType, ReactNode} from "react";

import styled, {css} from "styled-components";
import {ScrollbarStyles} from "@c/ComponentStyles";

export type ScrollBoxPropsType = {
    as?: ElementType
    children: ReactNode
} & ScrollBoxStyledPropsType & InnerPropsType & WrapPropsType;

type StyleValueType = ReturnType<typeof css>;

type ScrollBoxStyledPropsType = {
    $scrollBoxStyles?: StyleValueType
};

type WrapPropsType = {
    $wrapStyles?: StyleValueType
};

type InnerPropsType = {
    $innerStyles?: StyleValueType
};

const ScrollBoxStyled = styled.div<ScrollBoxStyledPropsType>`
    ${({$scrollBoxStyles}) => $scrollBoxStyles && $scrollBoxStyles}
    overflow: hidden;
`

const Wrap = styled.div<WrapPropsType>`
    ${({$wrapStyles}) => $wrapStyles && $wrapStyles}

    position: relative;
    height: 100%;
    border-radius: ${({theme}) => theme.radius};
    border: 1px solid ${({theme}) => theme.colors.primary};
    background-color: rgba(${({theme}) => theme.colors.darkRgb}, .6);
`

const Inner = styled.div<InnerPropsType>`
    ${ScrollbarStyles};
    ${({$innerStyles}) => $innerStyles && $innerStyles}
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;

    > :first-child {
        padding-top: calc(20px + var(--scroll-box-padding));
    }

    > :last-child {
        padding-bottom: calc(20px + var(--scroll-box-padding));
    }
`

export {ScrollBoxStyled}

export const S = {
    Wrap, Inner
}