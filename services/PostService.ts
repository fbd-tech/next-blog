// type
import PostType from "../types/PostType";
// repository
import RepositoryFactory from "../repositories/RepositoryFactory";
import FeaturedImageType from "../types/FeaturedImageType";
import CategoryType from "../types/CategoryType";
import { UrlImageConst } from "../constants/UrlConst";

class PostService {
    static async getList(): Promise<PostType[]> {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: any) => {
                const post: PostType = {
                    id: data.node.id,
                    title: data.node.title,
                    slug: data.node.slug,
                    excerpt: data.node.title,
                    date: data.node.date,
                    category: {
                        name: data.node.categories.edges[0].node.name,
                        slug: data.node.categories.edges[0].node.slug
                    },
                    featuredImage: {
                        url: data.node.featuredImage ?
                            data.node.featuredImage.node.sourceUrl :
                            UrlImageConst.noImage
                    },
                }
                return post
            })
        } catch(e) {
            console.log(e)
            return []
        }
    }
}

export default PostService