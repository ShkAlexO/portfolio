import { useState, useEffect } from "react";
import {apiPosts, getPosts} from "@/services/postService";

export const usePosts = (modifiedData = null) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPosts(apiPosts);
                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const modifiedPosts = modifiedData ? posts.filter(modifiedData) : posts;

    return { posts: modifiedPosts, loading };
}
