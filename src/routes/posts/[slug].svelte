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

<img class="mb-5" src={post.coverImage.url} alt={post.title} />
<h1 class="text-3xl">{post.title}</h1>

{#each post.tags as tag}
	<span class="badge badge-primary">{tag}</span>
{/each}

<article class="prose">
	{@html post.content.html}
</article>

<time>{post.date}</time>
