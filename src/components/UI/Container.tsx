import { ReactNode } from "react";
import styled from "styled-components";

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
    padding: 0 15px;
    margin: 0 auto;
`