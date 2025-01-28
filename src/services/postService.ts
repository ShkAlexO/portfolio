export const apiPosts = "https://64fdb2d8596493f7af7e766e.mockapi.io/blog";

export const getPosts = (apiUrl:string) =>
    fetch(apiUrl).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        return response.json();
    });