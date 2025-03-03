import {css} from "styled-components";
import {media} from "@/styles/Theme";

const scrollBoxStyles = css`
    ${media.max('xl')} {
        height: 100%;
        border: none;
    }
`

const wrapStyles = css`
    ${media.max('xl')} {
        border: none;
    }
`

const innerStyles = css`
    ${media.max('xl')} {
        .js-open-sidebar & {
            overflow-y: hidden;
        }
    }
`

export {
    scrollBoxStyles, wrapStyles, innerStyles
}