import styled from "styled-components";
import {memo, useState} from "react";
import {BoxWrapStyles, HorizontalScrollbarStyles} from "@c/ComponentStyles";

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
        <StyledCategoryTabs>
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
        </StyledCategoryTabs>
    )
})

const StyledCategoryTabs = styled.div`
    ${BoxWrapStyles};
    position: relative;
    display: grid;
    width: fit-content;
    height: auto;
    overflow: hidden;
    padding: 0;
    margin: 0 auto 60px;

    button {
        padding: 10px 20px;
        white-space: nowrap;
        min-width: max-content;
        max-width: max-content;
        text-transform: capitalize;
    }
`

const Inner = styled.div`
    ${HorizontalScrollbarStyles};
    display: flex;
    gap: 12px;
    overflow-y: auto;
    padding: 10px var(--scroll-box-padding);
`