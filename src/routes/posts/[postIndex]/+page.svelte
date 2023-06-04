<script>
    import { page } from "$app/stores";
    const postId = $page.params.postId
    console.log(postId)
    export let data
</script>
<h1>Wagwan</h1>
{data.posts}
<!-- {post.content.rendered} -->