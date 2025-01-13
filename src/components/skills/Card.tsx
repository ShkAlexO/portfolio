import styled from "styled-components";
import {Icon, StyledIcon} from "../icon/Icon.tsx";

type CardPropsType = {
    iconId: string
    title: string
}
export const Card = ({iconId, title}: CardPropsType) => {
    return (
        <StyledCard>
            <Icon iconId={iconId}/>
            <span>{title}</span>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${StyledIcon} {
        height: 60px;
        width: auto;
    }
`

