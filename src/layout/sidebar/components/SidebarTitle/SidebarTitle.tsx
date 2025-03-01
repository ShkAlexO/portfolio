import {FC} from "react";
import {SidebarTitleStyled} from "@sbc/SidebarTitle/SidebarTitle.styles";

type SidebarTitlePropsType = {
    title: string
}

export const SidebarTitle: FC<SidebarTitlePropsType> = ({title}) => {
    return (
        <SidebarTitleStyled as='h3' fontSize='h6'>{title}</SidebarTitleStyled>
    )
}