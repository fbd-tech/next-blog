import type { NextPage } from 'next'
// const
import PostConst from '../constants/PostConst'
// type
import PostOnListType from '../types/PostOnListType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
// component
import PostBox from '../components/molecules/PostBox'
import Link from 'next/link'
import Layout from '../components/templates/Layout'
import Pagination from '../components/molecules/Pagination'

const Page: NextPage<{
  staticPostList: PostOnListType[],
  staticTotal: number,
  currentPage: number,
}> = ({ staticPostList, staticTotal, currentPage }) => {
  const [postList, total] = usePostListSwr({ currentPage, staticPostList, staticTotal })
    return (
        <Layout>
            <div className='flex flex-wrap w-main mx-auto'>
                {postList!.map((post) => {
                    return (
                        <div key={post.id} className='w-1/3 pr-4 pb-4 [&:nth-of-type(3n)]:pr-0'>
                            <PostBox post={post} />
                        </div>
                    )
                })}
            </div>
            <Pagination
                total={total}
                sizePerPage={PostConst.sizePerPage}
                currentPage={currentPage}
                path=""
             />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await PostService.getAllPageList()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: {
    params: {
        page: string
    }
}) {
    const currentPage = parseInt(params.page)
    const [staticPostList, staticTotal] = await PostService.getList({ page: currentPage })
    return {
        props: {
            staticPostList,
            staticTotal,
            currentPage,
        },
        revalidate: 10
    }
}

export default Page