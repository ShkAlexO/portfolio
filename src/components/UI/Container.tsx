import { ReactNode } from "react";
import styled from "styled-components";
import {media} from "@/styles/Theme";

type ContainerPropsType = {
    children: ReactNode
}

export const Container = ({children}:ContainerPropsType) =>  {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    max-width: 1430px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    ${media.max('xs')} { 
        padding: 0 7px;
    }
`