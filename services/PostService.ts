import RepositoryFactory from "../repositories/RepositoryFactory";

type PostType = {
    title: string,
    content: string,
    date: string,
    id: string,
}

class PostService {
    static async getList(): Promise<PostType[]> {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: {node: PostType}) => {
                return data.node
            })
        } catch(e) {
            return []
        }
    }
}

export default PostService;