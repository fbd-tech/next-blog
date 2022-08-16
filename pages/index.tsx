import type { NextPage } from 'next'
// type
import PostType from '../types/PostType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
// component
import PostBox from '../components/molecules/PostBox'
import Link from 'next/link'

const Home: NextPage<{
  staticPostList: PostType[]
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList)
  return (
    <div className='flex w-main mx-auto'>
      {postList!.map((post) => {
        return (
          <div key={post.id} className='w-1/3 p-4'>
            <PostBox post={post} />
          </div>
        )
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
