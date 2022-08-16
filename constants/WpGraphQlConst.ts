export class WpGraphQlPostConst {
    static list = `query PostListQuery {
      posts {
        edges {
          node {
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            slug
            title
          }
        }
      }
    }`

    static one = `query PostBySlugQuery($id: ID!) {
      post(id: $id, idType: SLUG) {
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        slug
        title
      }
    }`

    static allSlugList = `query PostAllSlugListQuery {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }`
}