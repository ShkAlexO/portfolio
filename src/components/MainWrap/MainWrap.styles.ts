import styled from "styled-components";
import {media} from "@/styles/Theme";

export const MainWrapStyled = styled.div`
    ${media.min('xl')} {
        display: contents;
    }

    ${media.max('xl')} {
        position: relative;
        overflow: hidden;
        border-radius: ${({theme}) => theme.radius};
        border: 1px solid ${({theme}) => theme.colors.primary};
    }
`