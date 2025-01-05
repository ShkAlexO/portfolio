import heroImage from '../../../../assets/images/man.webp';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Hero = () =>  {
    return (
        <StyledHero>
            <div>
                <h1>I’m Alexandr. <span>Front-end</span> Developer </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <Link to="/about">About me</Link>
            </div>

            <img src={heroImage} alt="Hero Image"/>
        </StyledHero>
    );
}

const StyledHero = styled.section`
    display: grid;
    grid-template-columns: 1fr 380px;
    height: 100%;
    //background-color: rgba(29, 33, 45, .6);
    img {
        display: block;
        align-self: end;
        width: 100%;
        height: auto;
        max-height: 100%;
    }
`