<script>
    import { page } from "$app/stores";
    import {allPosts} from "../../../stores/posts";
    const postId = $page.params.postIndex;
    
    console.log($allPosts[postId]);
    const currentPost = $allPosts[postId]
</script>
<h1>{currentPost.name}</h1>
{@html currentPost.content}