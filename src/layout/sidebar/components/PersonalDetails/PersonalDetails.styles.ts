import styled from "styled-components";
import {media} from "@/styles/Theme";

const PersonalDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        padding: 10px 12px;
        border-radius: ${({theme}) => theme.radius};
        background: linear-gradient(to right,
        ${({theme}) => theme.colors.primaryDark} 30%,
        rgba(${({theme}) => theme.colors.primaryRgb}, .5) 100%);

        ${media.max('em')} {
            gap: 20px;
        }
    }

    a {
        color: ${({theme}) => theme.colors.white};

        &:hover {
            color: ${({theme}) => theme.colors.secondary};
        }
    }
`;

const Age = styled.div``;
const Email = styled.div``;
const Phone = styled.div``;
const Address = styled.div``;

export {PersonalDetailsStyled}
export const S = {
    Age, Email, Phone, Address
}