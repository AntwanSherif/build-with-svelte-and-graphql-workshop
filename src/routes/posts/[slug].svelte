<script context="module">
	export const load = async ({ fetch, page: { params } }) => {
		const { slug } = params;
		const res = await fetch(`/posts/${slug}.json`);

		if (res.ok) {
			const { post } = await res.json();
			return {
				props: {
					post
				}
			};
		}
	};
</script>

<script>
	export let post;
</script>

<article class="prose">
	{@html post.content.html}
	<img class="rounded" src={post.coverImage.url} alt={post.title} />
</article>
