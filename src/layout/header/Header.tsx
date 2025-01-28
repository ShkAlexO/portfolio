import {useDispatch} from "react-redux";
import {toggleSidebar} from "@/redux/actions";

import styled from "styled-components";
import {media} from "@/styles/Theme";
import {Menu} from "@c/Menu/Menu";
import {SidebarToggle} from "@c/SidebarToggle";
import {BoxWrapStyles} from "@c/ComponentStyles";

type HeaderPropsType = {
    toggleRef: React.RefObject<HTMLButtonElement>
};

export const Header = ({toggleRef}:HeaderPropsType) => {
    const dispatch = useDispatch();

    const handleSidebarToggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <StyledHeader>
            <SidebarToggleBox>
                <SidebarToggle ref={toggleRef} onClick={handleSidebarToggle}/>
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
    ${media.max('sm')} {
        padding: 5px 10px;
    }
    ${media.max('xs')} {
        padding: 3px 6px;
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











