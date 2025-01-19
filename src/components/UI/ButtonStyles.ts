import { css }  from "styled-components";

export const ButtonStyles = css`
    position: relative;
    display: block;
    isolation: isolate;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    padding: 15px 25px;
    max-width: 220px;
    width: 100%;
    cursor: pointer;
    border-radius: ${({theme}) => theme.radius};
    overflow: hidden;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition: all .3s ease;
    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(90deg, ${({theme}) => theme.colors.darkBlue} 0%, ${({theme}) => theme.colors.primaryDark} 100%);
        transition: all .3s ease;
    }

    &:hover {
        color: ${({theme}) => theme.colors.white};
       &::before {
           opacity: 0;
       }
    }
`;


