import {Link} from "react-router-dom";
import styled, {css} from "styled-components";
import {media} from "@/styles/Theme";

export const ColorText = styled.span<{
    $colorName?: string
    $fontWeight?: string
}>`
    color: ${({
                  theme,
                  $colorName
              }) => ($colorName ? theme.colors[$colorName] : theme.colors.accent)};
    font-weight: ${({$fontWeight}) => $fontWeight || 'inherit'};
`

export const BoxWrapStyles = css`
    padding: 15px;
    border-radius: ${({theme}) => theme.radius};
    width: 100%;
    height: 100%;
    border: 1px solid ${({theme}) => theme.colors.primary};
    background-color: rgba(${({theme}) => theme.colors.colorStRGB}, .6);
`

export const RoundIconStyles = css`
    position: relative;
    isolation: isolate;
    overflow: hidden;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 5px;
    width: 45px;
    aspect-ratio: 1/1;
    color: ${({theme}) => theme.colors.colorSd};
    transition: all .3s ease;

    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(90deg,
        ${({theme}) => theme.colors.colorSt} 0%,
        ${({theme}) => theme.colors.primaryDark} 100%);
        transition: all .3s ease;
    }

    &:hover {
        color: ${({theme}) => theme.colors.secondary};
        box-shadow: 0 0 3px 2px rgba(${({theme}) => theme.colors.secondaryRgb}, 0.3);

        &::before {
            transform: rotate(45deg);
        }
    }

    svg {
        display: block;
        width: auto;
        height: auto;

        path {
            stroke-width: 1px
        }
    }
`

export const ButtonStyles = css`
    position: relative;
    display: block;
    isolation: isolate;
    font-size: inherit;
    font-weight: 500;
    line-height: 1;
    color: ${({theme}) => theme.colors.colorSd};
    text-align: center;
    padding: 15px 25px;
    max-width: 220px;
    width: 100%;
    cursor: pointer;
    border-radius: ${({theme}) => theme.radius};
    overflow: hidden;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.primary};
    transition: all .3s ease;

    ${media.max('md')} {
        padding: 13px 22px;
        max-width: 180px;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(90deg, ${({theme}) => theme.colors.colorSt} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
        transition: all .3s ease;
    }

    &.buttonActive,
    &:hover {
        color: ${({theme}) => theme.colors.colorSd};

        &::before {
            opacity: 0;
        }
    }
`;

export const Button = styled.button`
    ${ButtonStyles}
`

export const ButtonLink = styled(Link)`
    ${ButtonStyles}
`;

export const ScrollbarStyles = css`
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: 2;
        left: 0;
        width: 100%;
        height: var(--scroll-box-padding);
        background-color: rgb(${({theme}) => theme.colors.colorStRGB});
    }

    &::before {
        top: 0;
        border-top-left-radius: ${({theme}) => theme.radius};
        border-top-right-radius: ${({theme}) => theme.radius};
        background: linear-gradient(0deg, rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%, rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 15%, rgba(${({theme}) => theme.colors.colorStRGB}, 1) 50%);
    }

    &::after {
        bottom: 0;
        border-bottom-left-radius: ${({theme}) => theme.radius};
        border-bottom-right-radius: ${({theme}) => theme.radius};
        background: linear-gradient(180deg, rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%, rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 15%, rgba(${({theme}) => theme.colors.colorStRGB}, 1) 50%);
    }

    &::-webkit-scrollbar {
        width: var(--width-scrollbar);
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
`

export const HorizontalScrollbarStyles = css`
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        z-index: 2;
        width: var(--scroll-box-padding);
        height: 100%;
        background-color: rgb(${({theme}) => theme.colors.colorStRGB});
    }

    &::before {
        left: 0;
        border-top-left-radius: ${({theme}) => theme.radius};
        border-top-right-radius: ${({theme}) => theme.radius};
        background: linear-gradient(270deg, rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%, rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 15%, rgba(${({theme}) => theme.colors.colorStRGB}, 1) 50%);
    }

    &::after {
        right: 0;
        border-bottom-left-radius: ${({theme}) => theme.radius};
        border-bottom-right-radius: ${({theme}) => theme.radius};
        background: linear-gradient(90deg, rgba(${({theme}) => theme.colors.colorStRGB}, 0) 0%, rgba(${({theme}) => theme.colors.colorStRGB}, 0.63) 15%, rgba(${({theme}) => theme.colors.colorStRGB}, 1) 50%);
    }

    &::-webkit-scrollbar {
        height: var(--width-scrollbar);
    }

    &::-webkit-scrollbar-thumb:horizontal {
        background: ${({theme}) => theme.colors.primary};
        border-radius: ${({theme}) => theme.radius};
        border: 2px solid transparent;
        background-clip: content-box;
    }

    &::-webkit-scrollbar-track:horizontal {
        background: rgba(${({theme}) => theme.colors.primaryDarkRgb}, .4);
        border-radius: ${({theme}) => theme.radius};
    }
`


