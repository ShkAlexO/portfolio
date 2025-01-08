import styled from "styled-components";
import { ReactNode } from "react";

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
    max-width: 1440px;
    padding: 0 15px;
    margin: 0 auto;
`