import {FC} from "react";
import {ProfBgPropsType} from "@/data/profBgData";
import {CareerItemStyled, S} from "@c/sections/Career/CareerItem.styles";

export type CareerItemPropsType = ProfBgPropsType & {
    listType: 'education' | 'work'
    content: string | undefined
};

const InfoEducation: FC<ProfBgPropsType> = ({title, subtitle, start, end}) => {
    return (
        <S.InfoEducation>
            <S.InfoTitle as='h3'>
                <span>{title}</span>
            </S.InfoTitle>
            <S.Company as='h4' fontSize='h5'>
                <S.CompanyName> {subtitle}</S.CompanyName>
            </S.Company>
            <S.Period>
                <span>{start}</span> - <span>{end}</span>
            </S.Period>
        </S.InfoEducation>
    )
}

const InfoWork: FC<ProfBgPropsType> = ({title, subtitle, mode, start, end}) => {
    return (
        <S.InfoWork>
            <S.InfoTitle as='h3'>
                <S.InfoColorText $colorName='colorSd'>Position</S.InfoColorText>
                <S.Position dangerouslySetInnerHTML={{__html: title}}/>
            </S.InfoTitle>
            <S.Company as='h4' fontSize='h5'>
                <S.CompanyName> {subtitle}</S.CompanyName>
                <S.Mode>({mode})</S.Mode>
            </S.Company>
            <S.Period>
                <span>{start}</span> - <span>{end}</span>
            </S.Period>
        </S.InfoWork>
    )
}

export const CareerItem: FC<CareerItemPropsType> = ({listType, content, headline, ...props}) => {
    const CurComponent = listType === 'education' ? InfoEducation : InfoWork;

    return (
        <CareerItemStyled>
            <S.Info>
                <CurComponent {...props}/>
            </S.Info>

            <S.Content>
                <S.Title as='h5' fontSize='h3'>{headline}</S.Title>

                <S.Text>{content}</S.Text>
            </S.Content>
        </CareerItemStyled>
    )
}