<script>
    import Navbar from "$lib/navbar.svelte";
</script>

<Navbar />
<slot></slot>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>