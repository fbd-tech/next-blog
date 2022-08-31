// const
import PostConst from "../constants/PostConst"
// type
import PostType from "../types/PostType"
import PostOnListType from "../types/PostOnListType"
// repository
import RepositoryFactory from "../repositories/RepositoryFactory"
import OffsetPaginationType from "../types/OffsetPaginationType"

class PostService {
    static async getList({ page, categoryId }:{
        page: number,
        categoryId?: number
    }): Promise<[PostOnListType[], number]> {
        try {
            const offsetPagination = this._makeOffsetPaginationFromPage(page)
            const res = await RepositoryFactory.post.getList({ offsetPagination, categoryId })
            const postList = res.data.data.posts.edges.map((data: any) => {
                const post: PostOnListType = {
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
            const total = res.data.data.posts.pageInfo.offsetPagination.total
            return [postList, total]
        } catch {
            return [[], 0]
        }
    }

    static async getOne({ id }: {
        id: string
    }): Promise<PostType | null> {
        try {
            const res = await RepositoryFactory.post.getOne({ id })
            const data = res.data.data.post
            const post: PostType = {
                id: data.id,
                title: data.title,
                slug: data.slug,
                date: data.date,
                content: data.content,
                featuredImage: {
                    url: data.featuredImage.node.sourceUrl
                },
                category: {
                    slug: data.categories.edges[0].node.slug,
                    name: data.categories.edges[0].node.name
                }
            }
            return post
        } catch {
            return null
        }
    }

    static async getAllSlugList(): Promise<{
        params: {
            slug: string
        }
    }[]> {
        try {
            const res = await RepositoryFactory.post.getAllSlugList()
            return res.data.data.posts.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }


    static async getAllCategorySlugList(): Promise<{
        params: {
            slug: string
        }
    }[]> {
        try {
            const res = await RepositoryFactory.post.getAllCategorySlugList()
            return res.data.data.categories.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }

    static async getAllPageList(): Promise<{
        params: {
            page: string
        }
    }[]> {
        const total = await this.getTotal()
        const pageTotal = Math.ceil(total / PostConst.sizePerPage)
        const pageList = [...Array(pageTotal)].map((_, i) => i + 1)
        return pageList.map((page:number) => {
            return { params: { page: page.toString() }}
        })
    }

    static async getCategoryIdBySlug({ slug }: {
        slug: string
    }): Promise<number> {
        const res = await RepositoryFactory.post.getCategoryIdBySlug({ slug })
        return res.data.data.category.categoryId
    }

    static async getTotal(): Promise<number> {
        const res = await RepositoryFactory.post.getTotal()
        return res.data.data.posts.pageInfo.offsetPagination.total
    }

    private static _makeOffsetPaginationFromPage(page: number): OffsetPaginationType {
        return { offset: (page - 1) * PostConst.sizePerPage, size: PostConst.sizePerPage }
    }
    
}

export default PostService