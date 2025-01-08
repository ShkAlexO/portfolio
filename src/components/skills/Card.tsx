import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

type CardPropsType = {
    iconId: string
    title: string
}
export const Card = ({iconId, title}: CardPropsType) => {
    return (
        <StyledCard>
            <StyledIcon iconId={iconId}/>
            <span>{title}</span>
        </StyledCard>
    );
};

const StyledCard = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const StyledIcon = styled(Icon)`
    height: 60px;
    width: auto;
`
