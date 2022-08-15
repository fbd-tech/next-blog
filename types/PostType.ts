import FeaturedImageType from "./FeaturedImageType"
import CategoryType from "./CategoryType"

interface PostType {
    id: string
    title: string
    slug: string
    date: string
    excerpt: string
    featuredImage: FeaturedImageType
    category: CategoryType
}

export default PostType