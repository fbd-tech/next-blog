import type { NextPage } from 'next'
// type
import PostType from '../types/PostType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
// component
import Image from 'next/image'

const Home: NextPage<{
  staticPostList: PostType[]
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList)
  return (
    <div className='flex w-main mx-auto'>
      {postList!.map((post) => {
        return (
          <div className='w-1/3 p-4' key={post.id}>
            <article className='shadow-sm shadow-gray-200'>
              <div>
                <img 
                  className='h-article-image w-full object-cover'
                  src={post.featuredImage.url} />
              </div>
              <div className='px-5 py-4'>
                <span>{post.category.name}</span>
                <h1 className='font-bold'>{post.title}</h1>
                <p>{post.excerpt}</p>
                <span>{post.date}</span>
              </div>
            </article>
          </div>)
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
