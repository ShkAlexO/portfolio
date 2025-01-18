import styled from "styled-components";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading.tsx";
import {ProfessionalBackgroundPropsType} from '@/data/profBgData.ts'
import {BoxWrapStyles} from "@c/BoxWrapStyles.ts";
import {ColorText} from "@c/ColorText.ts";
import {Heading} from "@c/Heading.tsx";

type CareerPropsType = SectionHeadingPropsType & {
    list: ProfessionalBackgroundPropsType[]
    listType: 'education' | 'work'
}

type ItemPropsType = ProfessionalBackgroundPropsType & {
    listType: 'education' | 'work'
    content: string | undefined
};

const InfoEducation = ({title, subtitle, start, end}: ProfessionalBackgroundPropsType) => {
    return (
        <StyledInfoEducation>
            <InfoTitle as='h3'>
                {title} <ColorText color='#fff' fontWeight='400'>course</ColorText>
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

const InfoWork = ({title, subtitle, mode, start, end}: ProfessionalBackgroundPropsType) => {
    return (
        <StyledInfoWork>
            <InfoTitle as='h3'>
                <ColorText color='#fff'>Position</ColorText> {title}
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

const Item = ({listType, content, headline, ...props}: ItemPropsType) => {
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

export const Career = ({title, subtitle, list, listType}: CareerPropsType) => {
    return (
        <StyledWorkHistory>
            <SectionHeading
                title={title}
                subtitle={subtitle}
            />
            <List>
                {list.map(item => <Item key={item.id} listType={listType} {...item} content={item.content}/>)}
            </List>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`
`

const List = styled.div`
    ${BoxWrapStyles};
    padding: 50px;
`

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 35px 25px;
    border-bottom: 1px solid #23ACD8;
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
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;

    span {
        display: block;
    }

    hr {
        width: 7px;
        height: 7px;
        align-content: center;
        margin: 0;
        border: none;
        border-radius: 50%;
        background-color: currentColor;
    }
`

const CompanyName = styled.span`
    color: #FFB07C;
`

const Mode = styled.span`
    text-transform: capitalize;
`

const Period = styled.div`
    display: flex;
    column-gap: 5px;
    width: fit-content;
    font-size: .9rem;
    padding: 8px 20px;
    border: 1px solid #23ACD8;
    border-radius: 8px;
    
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
        border-bottom: 1px solid #23ACD8;
    }
}
`

const Text = styled.p`
    margin-top: 10px;
`
