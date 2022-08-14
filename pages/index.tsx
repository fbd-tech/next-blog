import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PostService from '../services/PostService'

const Home: NextPage<{
  staticPostList: any
}> = ({ staticPostList }) => {
  return (
    <div>
      {staticPostList.map((post: any) => {
        return (
          <div>
            <span>{post.id}</span>
            <span>{post.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const staticPostList = await PostService.getList()
  return {
    props: {
      staticPostList
    },
  }
}

export default Home
