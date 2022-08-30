import useSWR from "swr";
// const
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
// type
import PostOnListType from "../../types/PostOnListType";
// service
import PostService from "../../services/PostService";

const usePostListSwr = ({ categoryId ,staticPostList }: {
    categoryId?: number,
    staticPostList: PostOnListType[]
}) => {
    let key, fetcher
    if (categoryId) {
        key = [WpGraphQlPostConst.listByCategory, categoryId]
        fetcher = (_: string, categoryId: number) => PostService.getList({ categoryId })
    } else {
        key = WpGraphQlPostConst.list
        fetcher = PostService.getList    
    }
    const { data: postList } = useSWR(
        key,
        fetcher,
        { fallbackData: staticPostList }
    )
    return postList
}

export default usePostListSwr