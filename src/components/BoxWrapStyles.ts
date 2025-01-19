import {css} from "styled-components";

export const BoxWrapStyles = css`
    padding: 15px;
    border-radius: ${({theme}) => theme.radius};
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: rgba(${({theme}) => theme.colors.primaryDarkRgb} , .3);
`