import Repository from "./Repository";

class PostRepository  {
    public getList() {
        return Repository(`query PostList {
            posts {
                edges {
                    node {
                        title
                        content
                        date
                        id
                    }
                }
            }
        }`).getWp()
    }
}

export default PostRepository;