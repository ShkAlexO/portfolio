import {userData} from "@/data/userData";
import {PersonalDetailsStyled, S} from "@sbc/PersonalDetails/PersonalDetails.styles";

const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[^0-9+]/g, '');
};

export const PersonalDetails = () => {
    const {age, email, phone, address} = userData;
    const formattedPhone = formatPhoneNumber(phone);

    return (
        <PersonalDetailsStyled>
            <S.Age><span>Age:</span><span>{age}</span></S.Age>
            <S.Phone><span>Phone:</span><a href={`tel:${formattedPhone}`}>{phone}</a></S.Phone>
            <S.Email><span>Email:</span><a href={`mailto:${email}`}>{email}</a></S.Email>
            <S.Address><span>Address:</span><span>{address}</span></S.Address>
        </PersonalDetailsStyled>
    )
}