import styled from "styled-components";
import { ReactNode } from "react";

type BoxWrapPropsType = {
    children:  ReactNode
    padding?: string
    borderWidth?: string
    bgColor?: string
    boxShadow?: string
}

export const BoxWrap = ({children, padding='15px', borderWidth= '1px', bgColor='#1d212d', boxShadow='0px 1px 5px 0px rgb(53 59 78)'}:BoxWrapPropsType) => {

    return (
        <StyledBoxWrap padding={padding} borderWidth={borderWidth} bgColor={bgColor} boxShadow={boxShadow}>
            {children}
        </StyledBoxWrap>
    );
};

const StyledBoxWrap = styled.div<BoxWrapPropsType>`
    padding: ${({ padding }) => padding};
    border-radius: 8px;
    width: 100%;
    height: 100%;
    border: ${({ borderWidth }) => borderWidth} solid #234155;
    background-color: ${({ bgColor }) => bgColor};
    box-shadow: ${({ boxShadow }) => boxShadow };
`