import {FC, ReactNode} from "react";
import {ContainerStyled} from "@c/UI/Container/Container.styles"

type ContainerPropsType = {
    children: ReactNode
}

export const Container: FC<ContainerPropsType> = ({children}) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
}