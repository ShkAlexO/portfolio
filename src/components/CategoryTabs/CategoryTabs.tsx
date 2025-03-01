import {FC, memo, useState} from "react";
import {CategoryTabsStyled, Inner} from "@c/CategoryTabs/CategoryTabs.styles";


type Post = {
    id: string;
    category: string;
}

type CategoryTabsProps = {
    posts: Post[];
    filterPosts: (category: string) => void;
}

export const CategoryTabs: FC<CategoryTabsProps> = memo(({posts, filterPosts}) => {
    const [activeCategory, setActiveCategory] = useState<string>("all");

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