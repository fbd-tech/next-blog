import FeaturedImageType from "./FeaturedImageType"
import CategoryType from "./CategoryType"

interface PostOnListType {
    id: string
    title: string
    slug: string
    date: string
    excerpt: string
    featuredImage: FeaturedImageType
    category: CategoryType
}

export default PostOnListType