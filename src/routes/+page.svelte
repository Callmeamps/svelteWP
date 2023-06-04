<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("https://blog.callmeamps.one/wp-json/wp/posts");
        const posts =  await res.json;
        return {
            props: {
                posts,
            },
        };
    };
</script>

<script>
    export let posts
</script>
<h1>Blog</h1>
{#each posts as post}
<div>
    <h1>{post.title.rendered}</h1>
    <p>{post.excerpt.rendered}</p>
</div>
{/each}