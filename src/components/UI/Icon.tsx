import {FC} from "react";
import styled from "styled-components";
import iconsSprite from '@/assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
}

export const Icon: FC<IconPropsType> = ({iconId, width = '50', height = '50'}) => {
    return (
        <IconStyled width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none"
                    xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </IconStyled>
    )
}

export const IconStyled = styled.svg``