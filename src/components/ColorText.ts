import styled from "styled-components";

type ColorTextPropsType = {
    color?: string
    fontWeight?: string
}

export const ColorText = styled.span<ColorTextPropsType>`
    color: ${({ color }) => color || '#6edcff'};
    font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
`