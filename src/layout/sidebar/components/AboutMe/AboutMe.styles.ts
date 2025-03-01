import styled from "styled-components";
import {media} from "@/styles/Theme";

import {Heading} from "@c/UI/Heading";
import {SocialLinksStyled} from "@c/SocialLinks/SocialLinks.styles";
import {SocialItemStyled} from "@c/SocialLinks/SocialItem.styles";
import {BoxWrapStyles} from "@c/ComponentStyles";

const Name = styled(Heading)`
    text-align: center;
    margin-bottom: 10px;
`

const AboutMeStyled = styled.div`
    ${Name} {
        color: ${({theme}) => theme.colors.colorSd};
    }

    ${SocialLinksStyled} {
        gap: 20px;
        justify-content: center;
    }

    ${SocialItemStyled} {
        font-size: .9rem;
        width: 35px;
    }
`

const Image = styled.div`
    ${BoxWrapStyles};
    background-color: transparent;
    box-shadow: 0px 3px 5px 0px rgba(${({theme}) => theme.colors.colorSdRGB}, .3);
    border-width: 2px;
    border-radius: 100%;
    width: 200px;
    aspect-ratio: 1 / 1;
    padding: 0;
    overflow: hidden;
    margin: 0 auto 20px;

    ${media.max('xxl')} {
        width: 160px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`

const Position = styled(Heading)`
    font-size: .9em;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
`

export {AboutMeStyled}

export const S = {
    Name, Image, Position
}