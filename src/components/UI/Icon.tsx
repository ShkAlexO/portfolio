import {FC} from "react";
import {BASE_URL} from "@/constants/config";
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
}

export const Icon: FC<IconPropsType> = ({iconId, width = '50', height = '50'}) => {
    return (
        <IconStyled width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none"
                    xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${BASE_URL}assets/icons-sprite.svg#${iconId}`}/>
        </IconStyled>
    )
}

export const IconStyled = styled.svg``