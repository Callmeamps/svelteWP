<script>
    import { page } from "$app/stores";
    import {allPosts} from "../../../stores/posts";
    const postId = $page.params.postIndex;
    
    const currentPost = $allPosts[postId];
    // console.log(currentPost.content)

    let paragraphs = currentPost.content.replaceAll("<p>", "<p class='text-sm text-primary'>");
    let headings = currentPost.content.match(/<h[1-6]>(.*?)<\/h[1-6]>/g);
    let images = currentPost.content.match(/<img[^>]*src="([^"]*)"[^>]*>/g);
    console.log(paragraphs)
    console.log(headings)
    console.log(currentPost.content)
</script>
<h1 class="text-4xl text-center m-8">{@html currentPost.name}</h1>
<section class="m-8 p-3">
    <img class="rounded" src="{currentPost.image}" alt="">
    {#each paragraphs as paragraph}
    <p class="mx-auto max-w-2xl lg:mx-0">
        {@html paragraph}
    </p>
    {/each}
</section>