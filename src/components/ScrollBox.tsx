import styled, {css} from "styled-components";
import {ElementType, ReactNode} from "react";

type ScrollBoxPropsType = {
    as?: ElementType
    children: ReactNode
    innerStyles?: ReturnType<typeof css>
};

type InnerPropsType = {
    customStyles?: ReturnType<typeof css>;
};

export const ScrollBox = ({ as: Component = 'div', children, innerStyles}: ScrollBoxPropsType) => {
    return (
        <StyledScrollBox as={Component}>
            <Wrap>
                <Inner customStyles={innerStyles}>
                    {children}
                </Inner>
            </Wrap>
        </StyledScrollBox>
    )
}

export const StyledScrollBox = styled.div`
    overflow: hidden;
`

const Wrap = styled.div`
    position: relative;
    height: 100%;
    border-radius: 8px;
    padding: 40px 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: rgba(${({theme}) => theme.colors.darkRgb}, .6);

    &::before,
    &::after {
        content: '';
        display: block;
        border-radius: 8px;
        position: absolute;
        z-index: 2;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: rgb(${({theme}) => theme.colors.darkRgb});
    }

    &::before {
        top: 0;
        background: linear-gradient(0deg, rgba(${({theme}) => theme.colors.darkRgb}, 0) 5%, rgba(${({theme}) => theme.colors.darkRgb}, 0.63) 15%, rgba(${({theme}) => theme.colors.darkRgb}, 1) 39%);
    }

    &::after {
        bottom: 0;
        background: linear-gradient(180deg, rgba(${({theme}) => theme.colors.darkRgb}, 0) 5%, rgba(${({theme}) => theme.colors.darkRgb}, 0.63) 15%, rgba(${({theme}) => theme.colors.darkRgb}, 1) 39%);
    }
`

export const Inner = styled.div<InnerPropsType>`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    &:first-child {
        padding-top: 40px;
    }

    &:last-child {
        padding-bottom: 40px;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
        border: 2px solid transparent;
        background-clip: content-box;
    }

    &::-webkit-scrollbar-track {
        background: rgba(${({ theme }) => theme.colors.primaryDarkRgb}, .4);
        border-radius: 8px;
    }

    ${({ customStyles }) => customStyles && customStyles}
`


