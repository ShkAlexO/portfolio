import {ProjectCardStyled, S} from "@c/ProjectCard/ProjectCard.styles";

export type ProjectPropsType = {
    id: string
    stack: string
    technologies: string[]
    description: string
    developmentTime: string
    image: string
}

export const ProjectCard = (
    {
        stack,
        technologies,
        description,
        developmentTime,
        image
    }: ProjectPropsType) => {
    return (
        <ProjectCardStyled>
            <S.Content>
                {Object.entries({
                    stack,
                    technologies,
                    description,
                    "development time": developmentTime
                }).map(([key, value]) => (
                    <S.ContentInner key={key}>
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