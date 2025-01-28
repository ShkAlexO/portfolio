export const CategoryTabs = ({posts, filterPosts}) => {
    return (
        <div>
            <button onClick={() => filterPosts("all")}>All posts</button>
            {posts.map(({id, category}) => (
                <button onClick={() => filterPosts(category)} key={id}>
                    {category}
                </button>
            ))}
        </div>
    )
}