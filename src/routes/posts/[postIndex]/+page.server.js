
export const load = async () => {
    const res = await fetch("https://blog.callmeamps.one/wp-json/wp/v2/posts/");
    const postData = await res.json();
    
    return {
        posts: postData
    }
}