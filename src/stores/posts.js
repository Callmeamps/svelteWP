import { writable } from "svelte/store";

export const allPosts = writable([]);

const fetchPosts = async () => {
    const res = await fetch("https://blog.callmeamps.one/wp-json/wp/v2/posts");
    const posts =  await res.json();
    const loadedPosts = posts.map((posts, index) => {
        return {
            index: index,
            id: posts.id,
            name: posts.title.rendered,
            description: posts.excerpt.rendered,
            image: posts.jetpack_featured_media_url,
            previewImage: posts.uagb_featured_image_src.medium_large[0],
            meta: {
                date: posts.date,
                author: posts.uagb_author_info.display_name,
            }
        };
    });
    allPosts.set(loadedPosts);
}

fetchPosts();