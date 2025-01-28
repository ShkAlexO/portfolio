import { ReactNode } from "react";
import styled from "styled-components";
import {media} from "@/styles/Theme";

type MainWrapPropsType = {
    children: ReactNode
}

export const MainWrap = ({children}:MainWrapPropsType) =>  {
    return (
        <StyledMainWrap>
            {children}
        </StyledMainWrap>
    );
}

export const StyledMainWrap = styled.div`
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