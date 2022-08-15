import CategoryType from "./CategoryType";
import FeaturedImageType from "./FeaturedImageType";

interface PostType {
    id: string
    slug: string
    title: string
    date: string
    excerpt: string
    featuredImage: FeaturedImageType
    category: CategoryType
}

export default PostType