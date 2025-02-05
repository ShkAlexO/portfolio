import {ReactNode} from "react";
import {ContainerStyled} from "@c/UI/Container/Container.styles"

type ContainerPropsType = {
    children: ReactNode
}

export const Container = ({children}: ContainerPropsType) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
}