import PostRepository from "./PostRepository";

const RepositoryFactory = {
    post: new PostRepository(),
}

export default RepositoryFactory;