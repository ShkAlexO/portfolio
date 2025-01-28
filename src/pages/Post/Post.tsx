import { useParams } from "react-router-dom";
import {Container} from "@c/UI/Container";

export const Post = () => {
    const { categoryId, postId } = useParams();
    console.log("categoryId:" + categoryId + "|", "postId:" + postId);

    return (
        <Container>
 dsfdf
        </Container>
    );
}
