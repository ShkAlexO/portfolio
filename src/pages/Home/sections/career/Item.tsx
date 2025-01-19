import styled from "styled-components";
import {Heading} from "@c/Heading.tsx";
import {ColorText} from "@c/ColorText.ts";
import {ProfBgPropsType} from "@/data/profBgData.ts";

export type ItemPropsType = ProfBgPropsType & {
    listType: 'education' | 'work'
    content: string | undefined
};

const InfoEducation = ({title, subtitle, start, end}: ProfBgPropsType) => {
    return (
        <StyledInfoEducation>
            <InfoTitle as='h3'>
                {title} <ColorText colorName='white' fontWeight='400'>course</ColorText>
            </InfoTitle>
            <Company as='h4' fontSize='h5'>
                <CompanyName> {subtitle}</CompanyName>
            </Company>
            <Period>
                <span>{start}</span> - <span>{end}</span>
            </Period>
        </StyledInfoEducation>
    )
}

const InfoWork = ({title, subtitle, mode, start, end}: ProfBgPropsType) => {
    return (
        <StyledInfoWork>
            <InfoTitle as='h3'>
                <ColorText colorName='white'>Position</ColorText> {title}
            </InfoTitle>
            <Company as='h4' fontSize='h5'>
                <CompanyName> {subtitle}</CompanyName>
                <hr/>
                <Mode>{mode}</Mode>
            </Company>
            <Period>
                <span>{start}</span> - <span>{end}</span>
            </Period>
        </StyledInfoWork>
    )
}

export const Item = ({listType, content, headline, ...props}: ItemPropsType) => {
    const InfoComponent = listType === 'education' ? InfoEducation : InfoWork;

    return (
        <StyledItem>
            <InfoComponent {...props} />

            <Content>
                <Heading as='h5' fontSize='h3'>{headline}</Heading>

                <Text>{content}</Text>
            </Content>
        </StyledItem>
    )
}

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 35px 25px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    &:first-of-type {
        padding-top: 0;
    }
    &:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
    }
`

const StyledInfoEducation = styled.div`
    max-width: 250px;
    width: 100%;
    flex-shrink: 0;
`

const StyledInfoWork = styled.div`
    max-width: 360px;
    width: 100%;
    flex-shrink: 0;
`

const InfoTitle = styled(Heading)`
    margin-bottom: 10px;
`

const Company = styled(Heading)`
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 30px;

    span {
        display: block;
    }

    hr {
        width: 5px;
        height: 5px;
        margin: 0;
       transform: translateY(-3px);
        border: none;
        border-radius: 50%;
        background-color: currentColor;
    }
`

const CompanyName = styled.span`
    color: ${({theme}) => theme.colors.secondary};
`

const Mode = styled.span`
    font-size: .8em;
    text-transform: capitalize;
`

const Period = styled.div`
    display: flex;
    column-gap: 5px;
    width: fit-content;
    font-size: .9rem;
    padding: 8px 20px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({theme}) => theme.radius};
    
    span {
        text-transform: capitalize;
    }
`

const Content = styled.div`
${Heading} {
    position: relative;
    padding-bottom: 10px;
    &::after {
        content: '';
        display: block;
        width: 200px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
}
`

const Text = styled.p`
    margin-top: 10px;
`