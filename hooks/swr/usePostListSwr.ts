import useSWR from "swr";
// config
import { WpGraphQlConfig } from "../../config/WpGraphQlConfig";
// type
import PostType from "../../types/PostType";
// service
import PostService from "../../services/PostService";

const usePostListSwr = (staticPostList: PostType[]) => {
    const { data: postList } = useSWR(WpGraphQlConfig.postList, PostService.getList, {
        fallbackData: staticPostList
    })
    return postList;
}

export default usePostListSwr;