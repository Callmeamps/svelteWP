<script>
    export let post
</script>
<article class="flex max-w-xl flex-col items-start justify-between">
  <div class="flex items-center gap-x-4 text-xs">
    <time datetime="{post.meta.date}" class="text-gray-500">{post.meta.date}</time>
  </div>
  <img src="{post.previewImage}" alt="" class="h-250 w-250 rounded bg-gray-50 mt-6">
  <div class="group relative">
    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      <a href="/posts/{post.index}">
        <span class="absolute inset-0"></span>
        {post.name}
      </a>
    </h3>
    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{@html post.description}</p>
  </div>
  <div class="relative mt-8 flex items-center gap-x-4">
    <img src="https://fav.farm/🔥" alt="" class="h-10 w-10 rounded-full bg-gray-50">
    <div class="text-sm leading-6">
      <p class="font-semibold text-gray-900">
        <a href="/author">
          <span class="absolute inset-0"></span>
          {post.meta.author}
        </a>
      </p>
    </div>
  </div>
</article>
  