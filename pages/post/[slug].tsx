import { NextPage } from "next";
// service
import PostService from "../../services/PostService";

const Post: NextPage = () => {
    return (
        <div>記事詳細です</div>
    )
}

export async function getStaticPaths() {
    const paths = await PostService.getAllSlugList()
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}
  
export async function getStaticProps() {
    const post = await PostService.getOneBySlug()
    return {
        props: {},
    }
}

export default Post