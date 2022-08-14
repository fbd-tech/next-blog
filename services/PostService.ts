import RepositoryFactory from "../repositories/RepositoryFactory";

class PostService {
    static async getList() {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: any) => {
                return data.node
            })
        } catch(e) {
            return []
        }
    }
}

export default PostService;