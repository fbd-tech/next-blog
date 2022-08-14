import RepositoryFactory from "../repositories/RepositoryFactory";
import PostType from "../types/PostType";

class PostService {
    static async getList(): Promise<PostType[]> {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: any) => {
                return data.node
            })
        } catch {
            return []
        }
    }
}

export default PostService