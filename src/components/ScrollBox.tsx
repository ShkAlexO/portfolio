import styled, {css} from "styled-components";
import {ElementType, ReactNode} from "react";
import {ScrollbarStyles} from "@c/ComponentStyles.ts";

type ScrollBoxPropsType = {
    as?: ElementType
    children: ReactNode
} & StyledScrollBoxPropsType & InnerPropsType & WrapPropsType;

type StyleValueType = ReturnType<typeof css>;

type StyledScrollBoxPropsType = {
    scrollBoxStyles?: StyleValueType
};

type WrapPropsType = {
    wrapStyles?: StyleValueType
};

type InnerPropsType = {
    innerStyles?: StyleValueType
};

export const ScrollBox = (
    {
        as: Component = 'div',
        children,
        scrollBoxStyles,
        wrapStyles,
        innerStyles
    }: ScrollBoxPropsType) => {
    return (
        <StyledScrollBox as={Component} scrollBoxStyles={scrollBoxStyles}>
            <Wrap wrapStyles={wrapStyles}>
                <Inner innerStyles={innerStyles}>
                    {children}
                </Inner>
            </Wrap>
        </StyledScrollBox>
    )
}

export const StyledScrollBox = styled.div<StyledScrollBoxPropsType>`
    ${({scrollBoxStyles}) => scrollBoxStyles && scrollBoxStyles}
    overflow: hidden;
`

const Wrap = styled.div<WrapPropsType>`
    ${({wrapStyles}) => wrapStyles && wrapStyles}

    position: relative;
    height: 100%;
    border-radius: ${({theme}) => theme.radius};
    border: 1px solid ${({theme}) => theme.colors.primary};
    background-color: rgba(${({theme}) => theme.colors.darkRgb}, .6);
`

export const Inner = styled.div<InnerPropsType>`
    ${ScrollbarStyles};
    ${({innerStyles}) => innerStyles && innerStyles}
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    > :first-child {
        padding-top: calc(20px + var(--scroll-box-padding));
    }

    > :last-child {
        padding-bottom: calc(20px + var(--scroll-box-padding));
    }
`


