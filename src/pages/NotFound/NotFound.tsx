import {Container} from "@c/UI/Container/Container";
import {NotFoundStyled} from "@/pages/NotFound/NotFound.styles";

export const NotFound = () => {
    return (
        <NotFoundStyled>
            <Container>
                <h1>Page Not Found</h1>
            </Container>
        </NotFoundStyled>
    )
}