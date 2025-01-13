import { css }  from "styled-components";

export const ButtonStyles = css`
    position: relative;
    display: block;
    isolation: isolate;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
    text-align: center;
    padding: 15px 25px;
    max-width: 220px;
    width: 100%;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    background-color: transparent;
    border: 1px solid #23ACD8;
    transition: all .3s ease;
    &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(90deg, #1381a4 0%, #264B65 100%);
        transition: all .3s ease;
    }

    &:hover {
        color: #fff;
       &::before {
           opacity: 0;
       }
    }

    &:active {
        
    }

    &:focus {
        
    }
`;


