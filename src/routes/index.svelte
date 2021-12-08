<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch(`/posts.json`);

		if (res.ok) {
			const { posts } = await res.json();
			return {
				props: {
					posts
				}
			};
		}
	};
</script>

<script>
	export let posts;
</script>

<ul>
	{#each posts as { title, slug, date, excerpt, tags, coverImage }}
		<li class="card text-center">
			<figure>
				<img class="rounded" src={coverImage.url} alt={coverImage.alt} />
			</figure>

			<div class="card-body">
				<p>{title}</p>
				<p>{excerpt}</p>
				<a href={`/posts/${slug}`} class="btn">Read More</a>
			</div>
		</li>
		>
	{/each}
</ul>
