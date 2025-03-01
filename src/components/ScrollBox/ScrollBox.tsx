import {forwardRef} from "react";
import {ScrollBoxPropsType, ScrollBoxStyled, S} from "@c/ScrollBox/ScrollBox.styles";

export const ScrollBox = forwardRef<HTMLElement, ScrollBoxPropsType>((
    {
        as: Component = 'div',
        children,
        $scrollBoxStyles,
        $wrapStyles,
        $innerStyles
    }: ScrollBoxPropsType, ref) => {
    return (
        <ScrollBoxStyled as={Component}
                         $scrollBoxStyles={$scrollBoxStyles}
                         ref={ref}>
            <S.Wrap $wrapStyles={$wrapStyles}>
                <S.Inner $innerStyles={$innerStyles}>
                    {children}
                </S.Inner>
            </S.Wrap>
        </ScrollBoxStyled>
    )
});