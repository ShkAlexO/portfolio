import {S} from "./Item.styles"
import {ProfBgPropsType} from "@/data/profBgData";

export type ItemPropsType = ProfBgPropsType & {
    listType: 'education' | 'work'
    content: string | undefined
};

const InfoEducation = ({title, subtitle, start, end}: ProfBgPropsType) => {
    return (
        <S.InfoEducation>
            <S.InfoTitle as='h3'>
                <span>{title}</span> <S.InfoColorText $colorName='white' $fontWeight='400'>course</S.InfoColorText>
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

export const Item = ({listType, content, headline, ...props}: ItemPropsType) => {
    const CurComponent = listType === 'education' ? InfoEducation : InfoWork;

    return (
        <S.Item>
            <S.Info>
                <CurComponent {...props}/>
            </S.Info>

            <S.Content>
                <S.Title as='h5' fontSize='h3'>{headline}</S.Title>

                <S.Text>{content}</S.Text>
            </S.Content>
        </S.Item>
    )
}