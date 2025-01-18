import styled from "styled-components";

type ColorTextPropsType = {
    colorName?: string
    fontWeight?: string
}

export const ColorText = styled.span<ColorTextPropsType>`
    color: ${({theme, colorName}) => (
            colorName ? theme.colors[colorName] : theme.colors.blue
    )};
    font-weight: ${({fontWeight}) => fontWeight || 'inherit'};
`