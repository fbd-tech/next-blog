import Repository from "./Repository";

class PostRepository {
    static getList() {
        return Repository(`query PostListQuery {
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
        }`).getWp()
    }
}

export default PostRepository