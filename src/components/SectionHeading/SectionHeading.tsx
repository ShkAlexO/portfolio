import {FC} from "react";
import {SectionHeadingStyled, S} from "@c/SectionHeading/SectionHeading.styles";

export type SectionHeadingPropsType = {
    title?: string
    subtitle?: string
}
export const SectionHeading: FC<SectionHeadingPropsType> = ({title, subtitle}) => {
    return (title || subtitle) && (
        <SectionHeadingStyled>
            {title && <S.Title>{title}</S.Title>}
            {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </SectionHeadingStyled>
    )
}