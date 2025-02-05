import {ProfBgPropsType} from "@/data/profBgData";
import {CareerItemStyled, S} from "@c/sections/Career/CareerItem.styles";

export type CareerItemPropsType = ProfBgPropsType & {
    listType: 'education' | 'work'
    content: string | undefined
};

const InfoEducation = ({title, subtitle, start, end}: ProfBgPropsType) => {
    return (
        <S.InfoEducation>
            <S.InfoTitle as='h3'>
                <span>{title}</span> <S.InfoColorText $colorName='white'
                                                      $fontWeight='400'>course</S.InfoColorText>
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

const InfoWork = ({title, subtitle, mode, start, end}: ProfBgPropsType) => {
    return (
        <S.InfoWork>
            <S.InfoTitle as='h3'>
                <S.InfoColorText $colorName='white'>Position</S.InfoColorText><span>{title}</span>
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

export const CareerItem = ({listType, content, headline, ...props}: CareerItemPropsType) => {
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