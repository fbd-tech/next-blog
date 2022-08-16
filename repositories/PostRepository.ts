// const
import { WpGraphQlPostConst } from "../constants/WpGraphQlConst";
// repository
import Repository from "./Repository";

class PostRepository {
    static getList() {
        return Repository(WpGraphQlPostConst.list).getWp()
    }

    static getOne({ slug }: {
        slug: string
    }) {
        return Repository(WpGraphQlPostConst.one, {
            variables: {id: slug}
        }).getWp()
    }

    static getAllSlugList() {
        return Repository(WpGraphQlPostConst.allSlugList).getWp()
    }
}

export default PostRepository