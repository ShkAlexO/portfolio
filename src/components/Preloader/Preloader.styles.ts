import styled from "styled-components";

export const PreloaderStyled = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${({theme}) => theme.colors.blue};
    animation: spiner 2s linear infinite;
    margin: 40px auto;

    &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: ${({theme}) => theme.colors.primary};
        animation: spiner 3s linear infinite;
    }

    &:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: ${({theme}) => theme.colors.darkBlue};
        animation: spiner 1.5s linear infinite;
    }

    @keyframes spiner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`