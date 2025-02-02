import styled from "styled-components";
import {BoxWrapStyles} from "@c/ComponentStyles";

export type ProjectPropsType = {
    id: string
    stack: string
    technologies: string[]
    description: string
    developmentTime: string
    image: string
}

export const ProjectCard = ({ stack, technologies, description, developmentTime, image}: ProjectPropsType) => {

    return (
        <Card>
            <Content>
                {Object.entries({
                    stack,
                    technologies,
                    description,
                    "development time": developmentTime
                }).map(([key, value]) => (
                    <ContentInner key={key}>
                        <Label>{key}:</Label>
                        <Details>
                            {Array.isArray(value)
                                ? ((value as string[]).map((item, index) => (
                                    <DetailItem key={index}>{item}</DetailItem>)))
                                : <p>{value}</p>}
                        </Details>
                    </ContentInner>
                ))}
            </Content>
            <Image>
                <img src={image} alt={description}/>
            </Image>
        </Card>
    )
}


const Content = styled.div`
    min-height: 450px;
    padding: 60px 45px;
    align-content: center;
`
const ContentInner = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 12px;
`

const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
`

const DetailItem = styled.p`
    padding: 3px 12px;
    border-radius: 50px;
    background: linear-gradient(90deg, ${({theme}) => theme.colors.darkBlue} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
`

const Image = styled.div`
    position: relative;

    img {
        display: block;
        object-fit: cover;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }
`

const Card = styled.article`
    ${BoxWrapStyles};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    overflow: hidden;
    margin-bottom: 30px;

    &:nth-of-type(even) {
        ${Image} {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const Label = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};

    &::first-letter {
        text-transform: uppercase;
    }
`