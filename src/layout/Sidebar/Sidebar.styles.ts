import styled, {css} from "styled-components";
import {media} from "@/styles/Theme";
import {DownloadButtonStyled} from "@c/DownloadButton/DownloadButton.styles";

const scrollBoxStyles = css`
    position: relative;

    ${media.max('xl')} {
        width: var(--width-sidebar);
        position: absolute;
        top: -1px;
        left: 0;
        height: calc(100% + 2px);
        z-index: 2;
        transform: translateX(-100%);
        transition: transform .5s ease;

        ${media.max('xs')} {
            width: calc(100% + 2px);
        }

        .js-open-sidebar & {
            transform: translateX(-1px);
        }
    }
`

const wrapStyles = css`
    ${media.max('xl')} {
        background-color: rgb(${({theme}) => theme.colors.colorStRGB});
    }
`

const innerStyles = css`
    direction: rtl;
`

const SidebarInner = styled.div`
    direction: ltr;
    line-height: 1;
    font-size: .9rem;
    padding: 0 20px 0 15px;

    ${media.max('xxl')} {
        padding: 0 15px 0 10px;
    }

    > div {
        padding: 25px 8px;
        border-bottom: 1px solid rgba(${({theme}) => theme.colors.colorSdRGB}, .4);

        ${media.max('em')} {
            padding: 20px 0;
        }

        &:first-of-type {
            padding-top: 0;
        }

        &:last-of-type {
            padding-bottom: 0;
            border-bottom: 0;
        }
    }
`

const DownloadButtonInner = styled.div`
    ${DownloadButtonStyled} {
        max-width: 100%;

        ${media.range('em', 'xs')} {
            max-width: 270px;
            margin: 0 auto;
        }
    }
`

export const S = {
    scrollBoxStyles,
    wrapStyles,
    innerStyles,
    SidebarInner,
    DownloadButtonInner
}