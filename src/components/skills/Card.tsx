import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

type CardPropsType = {
    iconId: string
    title: string
    text: string
}
export const Card = ({iconId, title, text}: CardPropsType) => {
    return (
        <StyledCard>
            <Icon iconId={iconId}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    padding: 10px;
    border: 1px solid green;
    background-color: aquamarine;
`
