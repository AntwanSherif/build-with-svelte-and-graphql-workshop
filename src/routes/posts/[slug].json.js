import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async (req, res) => {
	const { slug } = req.params;

	try {
		const query = gql`
			query Post($slug: String!) {
				post(where: { slug: $slug }) {
					title
					slug
					date
					excerpt
					tags
					content {
						html
					}
					coverImage {
						url
					}
				}
			}
		`;

		const variables = { slug };
		const { post } = await client.request(query, variables);

		return {
			status: 200,
			body: { post }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: error.message }
		};
	}
};
