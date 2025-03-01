import {FC, ReactNode} from "react";
import {MainWrapStyled} from "@c/MainWrap/MainWrap.styles"

type MainWrapPropsType = {
    children: ReactNode
}

export const MainWrap: FC<MainWrapPropsType> = ({children}) => {
    return (
        <MainWrapStyled>
            {children}
        </MainWrapStyled>
    );
}