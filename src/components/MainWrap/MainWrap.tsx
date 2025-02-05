import {ReactNode} from "react";
import {MainWrapStyled} from "@c/MainWrap/MainWrap.styles"

type MainWrapPropsType = {
    children: ReactNode
}

export const MainWrap = ({children}: MainWrapPropsType) => {
    return (
        <MainWrapStyled>
            {children}
        </MainWrapStyled>
    );
}