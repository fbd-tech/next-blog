// type
import PostType from "../../types/PostType"
// component
import CommImage from "../atoms/image/CommImage"
import CategoryLabel from "../atoms/label/CategoryLabel"
import ArticleHeading from "../atoms/text/ArticleHeading"
import DateText from "../atoms/text/DateText"
import Link from "next/link"

const PostBox = ({ post }: {
    post: PostType
}) => {
    return (
        <article className="shadow-sm shadow-gray-200">
            <div>
                <Link href={`/${post.slug}`}>
                    <a>
                        <CommImage 
                            src={post.featuredImage.url}
                            alt=""
                            className="w-full h-48" />
                    </a>
                </Link>
            </div>
            <div className="py-4 px-5">
                <div className="flex mb-2">
                    <div className="mr-2">
                        <Link href={`/category/${post.category.slug}`}>
                            <a>
                                <CategoryLabel>{post.category.name}</CategoryLabel>
                            </a>
                        </Link>
                    </div>
                    <DateText>{post.date}</DateText>
                </div>
                <div className="mb-2">
                    <Link href={`/${post.slug}`}>
                        <a>
                            <ArticleHeading>{post.title}</ArticleHeading>
                        </a>
                    </Link>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
            </div>
        </article>
    )
}

export default PostBox