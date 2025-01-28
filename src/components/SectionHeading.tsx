import styled from "styled-components";
import {media} from "@/styles/Theme";

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
    ${media.max('md')} { 
        margin-bottom: 40px;
    }
`

export const Title = styled.h2`
    position: relative;
   font-size: 34px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    ${media.max('xxl')} {
        font-size: 30px;
    } 
    &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        border-bottom: 2px solid ${({theme}) => theme.colors.secondary};
    }
`
export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-top: 10px;
`
