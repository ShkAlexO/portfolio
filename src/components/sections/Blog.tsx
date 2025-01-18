import styled from "styled-components";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading.tsx";
import {ButtonLink} from "@c/UI/ButtonLink.ts";
import {CardGrid} from "@c/CardGrid.tsx";

const postsData = [
    {
        id: 1,
        image: "./src/assets/images/test-img.jpg",
        title: "Carbohydrates, Proteins, and Fats",
        text: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    },
    {
        id: 2,
        image: "./src/assets/images/test-img.jpg",
        title: "Cultivating a Healthy Relationship with Food",
        text: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being. Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being. Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    },
    {
        id: 3,
        image: "./src/assets/images/test-img.jpg",
        title: "The Benefits of Hydration for Weight Loss",
        text: "Discover how staying hydrated can support your weight loss goals and improve overall health. And improve overall health.",
    },
]

export const Blog = ({title, subtitle}: SectionHeadingPropsType) => {
    // const [post, setPost] = useState(postsData);
    return (
        <StyledBlog>
            <SectionHeading title={title} subtitle={subtitle}/>
            <CardGrid list={postsData}/>
            <ButtonLink to='/blog'>Go to Blog</ButtonLink>
        </StyledBlog>
    )
}

const StyledBlog = styled.section`
    ${ButtonLink} {
        margin: 60px auto 0;
    }
`




