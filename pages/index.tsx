import type { NextPage } from 'next'
import PostService from '../services/PostService'
import PostType from '../types/PostType'
import useSWR from 'swr'

const Home: NextPage<{
  staticPostList: PostType[]
}> = ({ staticPostList }) => {
  const { data: postList } = useSWR(`query PostListQuery {
      posts {
        edges {
          node {
            title
            id
            date
            content
          }
        }
      }
  }`, PostService.getList, {
      fallbackData: staticPostList
  })
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
      staticPostList
    },
    revalidate: 10
  }
}

export default Home
