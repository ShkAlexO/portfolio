import {SectionHeadingStyled, S} from "@c/SectionHeading/SectionHeading.styles";

export type SectionHeadingPropsType = {
    title?: string
    subtitle?: string
}
export const SectionHeading = ({title, subtitle}: SectionHeadingPropsType) => {
    return (title || subtitle) && (
        <SectionHeadingStyled>
            {title && <S.Title>{title}</S.Title>}
            {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </SectionHeadingStyled>
    )
}