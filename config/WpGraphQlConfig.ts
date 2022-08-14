export class WpGraphQlConfig {
    static postList = `query PostListQuery {
        posts {
          edges {
            node {
              title
              id
              date
              content
            }
          }
        }
    }`
}