import {ProjectCardStyled, S} from "@c/ProjectCard/ProjectCard.styles";
import {FC} from "react";

export type ProjectPropsType = {
    id: string
    stack: string
    technologies: string[]
    description: string
    "development time": string
    image: string
}

export const ProjectCard: FC<ProjectPropsType> = (
    {
        stack,
        technologies,
        description,
        "development time": developmentTime,
        image
    }) => {

    const projectDetails = {
        stack,
        technologies,
        description,
        "Development time": developmentTime
    };

    const getHighlight = (key: string) => key === 'technologies' || key === 'description';

    return (
        <ProjectCardStyled>
            <S.Content>
                {Object.entries(projectDetails).map(([key, value]) => (
                    <S.ContentInner key={key} data-highlight={getHighlight(key).toString()}>
                        <S.Label>{key}:</S.Label>
                        <S.Details>
                            {Array.isArray(value)
                                ? ((value as string[]).map((item, index) => (
                                    <S.DetailItem key={index}>{item}</S.DetailItem>)))
                                : <p>{value}</p>}
                        </S.Details>
                    </S.ContentInner>
                ))}
            </S.Content>
            <S.Image>
                <img src={image} alt={description}/>
            </S.Image>
        </ProjectCardStyled>
    )
}