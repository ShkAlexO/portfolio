import styled from "styled-components";
import {media} from "@/styles/Theme";
import {MainWrapStyled} from "@c/MainWrap/MainWrap.styles";

export const AppStyled = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns:  var(--width-sidebar) 1fr var(--width-header);
    gap: var(--gap);
    padding: var(--gap);
    height: 100vh;

    ${media.max('xl')} {
        grid-template-columns:  1fr var(--width-header);
    }

    header {
        ${media.min('xl')} {
            grid-area: 1 / 3 / 1 / -1;
        }
    }

    ${MainWrapStyled} {
        ${media.max('xl')} {
            grid-area: 1 / 1 / 2 / 2;
        }
    }

    main {
        ${media.min('xl')} {
            grid-area: 1 / 2 / 2 / 3;
        }
    }

    aside {
        ${media.min('xl')} {
            grid-area: 1 / 1 / 2 / 2;
        }
    }

    footer {
        grid-area: 2 / 1 / -1 / -1;
    }
`;