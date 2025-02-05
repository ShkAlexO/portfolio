import {memo, useState} from "react";
import {CategoryTabsStyled, Inner} from "./CategoryTabs.styles"

type CategoryTabsProps = {
    posts: { id: string; category: string }[];
    filterPosts: (category: string) => void;
}

export const CategoryTabs = memo(({posts, filterPosts}: CategoryTabsProps) => {
    const [activeCategory, setActiveCategory] = useState("all");

    const handleClick = (category: string) => {
        filterPosts(category);
        setActiveCategory(category);
    };

    const uniqueCategories = ["all", ...new Set(posts.map(post => post.category))];

    return (
        <CategoryTabsStyled>
            <Inner>
                {uniqueCategories.map((category) => (
                    <button
                        onClick={() => handleClick(category)}
                        key={category}
                        className={activeCategory === category ? "buttonActive" : ""}>
                        {category === "all" ? "All posts" : category}
                    </button>
                ))}
            </Inner>
        </CategoryTabsStyled>
    )
})