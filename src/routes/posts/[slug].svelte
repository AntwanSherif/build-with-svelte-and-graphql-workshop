<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export const load = async () => {
		const client = new GraphQLClient(
			'https://api-eu-central-1.graphcms.com/v2/ckwxmf4xi02w301z03ze7hn4w/master'
		);

		const query = gql`
			{
				posts {
					title
					slug
					date
					excerpt
					tags
					coverImage {
						url
					}
				}
			}
		`;

		const { posts } = await client.request(query);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

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
