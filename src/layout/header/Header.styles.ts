import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles";

const HeaderStyled = styled.header`
    ${BoxWrapStyles};
    position: relative;
    padding: 0;
    padding-top: var(--scroll-box-padding);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--scroll-box-padding);
        border-top-left-radius: ${({theme}) => theme.radius};
        border-top-right-radius: ${({theme}) => theme.radius};
        background-color: rgb(${({theme}) => theme.colors.colorStRGB});
        background: linear-gradient(0deg, rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%, rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 15%, rgba(${({theme}) => theme.colors.colorStRGB}, 1) 50%);
    }
`

const Controls = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    padding: 0 5px 15px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background-color: rgb(${({theme}) => theme.colors.colorStRGB});
        background: linear-gradient(180deg,
        rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%,
        rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 60%,
        rgba(${({theme}) => theme.colors.colorStRGB}, 1) 100%);
    }
`

const MenuBox = styled.div`
    position: relative;
    padding: 0;
    flex-grow: 1;
    overflow: hidden;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border: 1px solid transparent;
    }
`

export {
    HeaderStyled,
    Controls,
    MenuBox
}