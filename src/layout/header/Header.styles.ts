import styled from "styled-components";
import {media} from "@/styles/Theme";
import {BoxWrapStyles} from "@c/ComponentStyles";

const HeaderStyled = styled.header`
    ${BoxWrapStyles};
    padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--gap);
    overflow: hidden;

    ${media.max('xl')} {
        height: 100%;
        padding: 0;
        border: none;
        background: transparent;
    }
`

const HeaderBtnSidebarToggleBox = styled.div`
    padding: 5px 15px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.radius};

    ${media.min('xl')} {
        display: none;
    }

    ${media.max('sm')} {
        padding: 5px 10px;
    }

    ${media.max('xs')} {
        padding: 3px 6px;
    }
`

const ThemeSwitchButtonBox = styled.div`
    padding: 20px 5px;
`

const MenuBox = styled.div`
    position: relative;
    padding: 0;
    flex-grow: 1;
    overflow: hidden;

    ${media.max('xl')} {
        border: 1px solid ${({theme}) => theme.colors.primary};
        border-radius: ${({theme}) => theme.radius};
    }

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border: 1px solid transparent;
    }
`

export {
    HeaderStyled,
    HeaderBtnSidebarToggleBox,
    ThemeSwitchButtonBox,
    MenuBox
}