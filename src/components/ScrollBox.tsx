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
    border-radius: ${({theme}) => theme.radius};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: rgba(${({theme}) => theme.colors.darkRgb}, .6);
    
    &::before,
    &::after {
        content: '';
        display: block;
        border-radius: ${({theme}) => theme.radius};
        position: absolute;
        z-index: 2;
        left: 0;
        width: 100%; 
        height: var(--scroll-box-padding);
        background-color: rgb(${({theme}) => theme.colors.darkRgb});
    }

    &::before {
        top: 0;
        background: linear-gradient(0deg, rgba(${({theme}) => theme.colors.darkRgb}, 0) 0%, rgba(${({theme}) => theme.colors.darkRgb}, 0.63) 15%, rgba(${({theme}) => theme.colors.darkRgb}, 1) 50%);
    }

    &::after {
        bottom: 0;
        background: linear-gradient(180deg, rgba(${({theme}) => theme.colors.darkRgb}, 0) 0%, rgba(${({theme}) => theme.colors.darkRgb}, 0.63) 15%, rgba(${({theme}) => theme.colors.darkRgb}, 1) 50%);
    }
`

export const Inner = styled.div<InnerPropsType>`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    > :first-child {
        padding-top: var(--scroll-box-padding);
    }

    > :last-child {
        padding-bottom: var(--scroll-box-padding);
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.primary};
        border-radius: ${({theme}) => theme.radius};
        border: 2px solid transparent;
        background-clip: content-box;
    }

    &::-webkit-scrollbar-track {
        background: rgba(${({theme}) => theme.colors.primaryDarkRgb}, .4);
        border-radius: ${({theme}) => theme.radius};
    }

    ${({customStyles}) => customStyles && customStyles}
`


