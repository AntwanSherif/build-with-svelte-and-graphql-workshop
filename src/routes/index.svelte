<script context="module">
    import { gql, GraphQLClient } from "graphql-request";

    export const load = async () => {
     const client = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwxmf4xi02w301z03ze7hn4w/master");

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
    `

  const {posts} = await client.request(query);

  return {
      props: {
          posts
      }
  }
}

</script>

<script>
    export let posts
</script>

<pre>{JSON.stringify(posts, null, 2)}</pre>