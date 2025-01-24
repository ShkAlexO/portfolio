import styled from "styled-components";
import {Menu} from "@c/Menu/Menu";
import {BoxWrapStyles} from "@c/ComponentStyles.ts";
import {SidebarToggle} from "@c/SidebarToggle.tsx";
import {media} from "@/styles/Theme.ts";

export const Header = () => {

    return (
        <StyledHeader>
            <SidebarToggleBox>
                <SidebarToggle/>
            </SidebarToggleBox>
            <MenuBox>
                <Menu/>
            </MenuBox>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
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
const SidebarToggleBox = styled.div`
    padding: 5px 15px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.radius};
    ${media.min('xl')} {
        display: none;
    }
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











