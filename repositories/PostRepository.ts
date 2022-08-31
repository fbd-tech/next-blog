// const
import { WpGraphQlPostConst } from "../constants/WpGraphQlConst";
// type
import OffsetPaginationType from "../types/OffsetPaginationType";
// repository
import Repository from "./Repository";

class PostRepository {
    static getList({ offsetPagination, categoryId }: {
        offsetPagination: OffsetPaginationType,
        categoryId?: number
    }) {
        if (categoryId) {
            return Repository(
                WpGraphQlPostConst.listByCategory,
                { variables: { offsetPagination, categoryId } }
            ).getWp()
        }
        return Repository(
            WpGraphQlPostConst.list,
            { variables: { offsetPagination } }
        ).getWp()
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

    static getTotal() {
        return Repository(WpGraphQlPostConst.total).getWp()
    }
    
}

export default PostRepository