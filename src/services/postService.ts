export const API = "https://64fdb2d8596493f7af7e766e.mockapi.io/";
export const BLOG_ENDPOINT = "blog";
export const PROJECTS_ENDPOINT = "our-story";

export const getPosts = (apiUrl:string) =>
    fetch(apiUrl).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        return response.json();
    });