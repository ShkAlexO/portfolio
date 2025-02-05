import {useState, useEffect} from "react";
import {API, getPosts} from "@/services/postService";

export const usePosts = (endpoint: string) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPosts(`${API}${endpoint}`);
                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {posts, loading};
}