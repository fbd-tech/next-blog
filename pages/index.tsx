import type { NextPage } from 'next'
// type
import PostType from '../types/PostType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
const Home: NextPage<{
  staticPostList: PostType[]
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList);
  return (
    <div>
      {postList!.map((post) => {
        return <p key={post.id}>{post.title}</p>
      })}
    </div>
  )
}

export async function getStaticProps() {
  const staticPostList = await PostService.getList();
  return {
    props: {
      staticPostList: staticPostList
    },
    revalidate: 10
  }
}

export default Home
