// config
import { WpGraphQlConfig } from "../config/WpGraphQlConfig";
// repository
import Repository from "./Repository";

class PostRepository {
    static getList() {
        return Repository(WpGraphQlConfig.postList).getWp()
    }
}

export default PostRepository