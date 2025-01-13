import styled from "styled-components";

export type HeadingPropsType = {
    title?: string
    subtitle?: string
}
export const Heading = ({title, subtitle}:HeadingPropsType) => {
   return (title || subtitle) && (
       <SectionHeading>
           {title && <Title>{title}</Title>}
           {subtitle && <Subtitle>{subtitle}</Subtitle>}
       </SectionHeading>
   )
}
export const SectionHeading = styled.div`
    text-align: center;
    max-width: 950px;
    margin: 0 auto 50px;
`

export const Title = styled.h2`
   
`
export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-top: 10px;
`
