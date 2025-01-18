import styled from "styled-components";

export type SectionHeadingPropsType = {
    title?: string
    subtitle?: string
}
export const SectionHeading = ({title, subtitle}:SectionHeadingPropsType) => {
   return (title || subtitle) && (
       <StyledSectionHeading>
           {title && <Title>{title}</Title>}
           {subtitle && <Subtitle>{subtitle}</Subtitle>}
       </StyledSectionHeading>
   )
}
export const StyledSectionHeading = styled.div`
    text-align: center;
    max-width: 950px;
    margin: 0 auto 50px;
`

export const Title = styled.h2`
    position: relative;
   font-size: 36px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        border-bottom: 2px solid #FFB07C;
    }
`
export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-top: 10px;
`
