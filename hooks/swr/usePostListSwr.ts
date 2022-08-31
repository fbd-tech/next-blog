import useSWR from "swr";
// const
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
// type
import PostOnListType from "../../types/PostOnListType";
// service
import PostService from "../../services/PostService";

const usePostListSwr = ({ currentPage, categoryId, staticPostList, staticTotal }: {
    currentPage: number,
    categoryId?: number,
    staticPostList: PostOnListType[],
    staticTotal: number
}) => {
    let key, fetcher
    if (categoryId) {
        key = [WpGraphQlPostConst.listByCategory, currentPage, categoryId]
        fetcher = (_: string, page: number, categoryId: number) => PostService.getList({ page, categoryId })
    } else {
        key = [WpGraphQlPostConst.list, currentPage]
        fetcher = (_: string, page: number) => PostService.getList({ page })
    }
    const { data } = useSWR<[PostOnListType[], number]>(
        key,
        fetcher,
        { fallbackData: [staticPostList, staticTotal] }
    )
    return data ?? [staticPostList, staticTotal]
}

export default usePostListSwr