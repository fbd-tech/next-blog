// type
import PostType from "../types/PostType";
// repository
import RepositoryFactory from "../repositories/RepositoryFactory";

class PostService {
    static async getList(): Promise<PostType[]> {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: any) => {
                const post: PostType = {
                    id: data.node.id,
                    title: data.node.title,
                    slug: data.node.slug,
                    date: data.node.date,
                    excerpt: data.node.excerpt,
                    featuredImage: {
                        url: data.node.featuredImage.node.sourceUrl
                    },
                    category: {
                        slug: data.node.categories.edges[0].node.slug,
                        name: data.node.categories.edges[0].node.name
                    }
                }
                return post
            })
        } catch {
            return []
        }
    }

    static async getOneBySlug(): Promise<PostType> {
        try {
            const res = await RepositoryFactory.post.getOne({slug: 'test1'});
            const data = res.data.data.post
            const post: PostType = {
                id: data.id,
                title: data.title,
                slug: data.slug,
                date: data.date,
                excerpt: data.excerpt,
                featuredImage: {
                    url: data.featuredImage.node.sourceUrl
                },
                category: {
                    slug: data.categories.edges[0].node.slug,
                    name: data.categories.edges[0].node.name
                }
            }
            return post
        } catch(e) {
            console.log(e)
            throw Error()
        }
    }

    static async getAllSlugList(): Promise<PostType[]> {
        try {
            const res = await RepositoryFactory.post.getAllSlugList();
            return res.data.data.posts.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }
    
}

export default PostService