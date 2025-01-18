import styled from 'styled-components';
import {userData} from "@/data/userData.ts";

const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[^0-9+]/g, '');
};

export const PersonalDetails = () => {
    const {age, email, phone, address} = userData;
    const formattedPhone = formatPhoneNumber(phone);

    return (
        <StyledPersonalDetails>
            <Age><span>Age:</span><span>{age}</span></Age>
            <Phone><span>Phone:</span><a href={`tel:${formattedPhone}`}>{phone}</a></Phone>
            <Email><span>Email:</span><a href={`mailto:${email}`}>{email}</a></Email>
            <Address><span>Address:</span><span>{address}</span></Address>
        </StyledPersonalDetails>
    )
}

const StyledPersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        padding: 10px 12px;
        border-radius: 8px;
        background: linear-gradient(to right,
        ${({theme}) => theme.colors.primaryDark} 30%,
        rgba(${({theme}) => theme.colors.primaryRgb}, .5) 100%);
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