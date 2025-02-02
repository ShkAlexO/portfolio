import {Icon} from "@c/UI/Icon";
import {S} from './Card.styles'

type CardPropsType = {
    iconId: string
    title: string
}
export const Card = ({iconId, title}: CardPropsType) => {
    return (
        <S.Card>
            <Icon iconId={iconId}/>
            <span>{title}</span>
        </S.Card>
    );
}

