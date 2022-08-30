// const
import { WpGraphQlPostConst } from "../constants/WpGraphQlConst";
// repository
import Repository from "./Repository";

class PostRepository {
    static getList({ categoryId }: {
        categoryId?: number
    }) {
        if (categoryId) {
            return Repository(
                WpGraphQlPostConst.listByCategory,
                { variables: { categoryId } }
            ).getWp()
        }
        return Repository(WpGraphQlPostConst.list).getWp()
    }

    static getOne({ id }: {
        id: string
    }) {
        return Repository(
            WpGraphQlPostConst.one,
            { variables: { id } }
        ).getWp()
    }

    static getAllSlugList() {
        return Repository(WpGraphQlPostConst.allSlugList).getWp()
    }

    static getAllCategorySlugList() {
        return Repository(WpGraphQlPostConst.allCategorySlugList).getWp()
    }

    static getCategoryIdBySlug({ slug }: {
        slug: string
    }) {
        return Repository(
            WpGraphQlPostConst.categoryIdBySlug,
            { variables: { id: slug } }
        ).getWp()
    }
    
}

export default PostRepository