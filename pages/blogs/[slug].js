import { useRouter } from "next/router";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";

import { getAllPostsWithSlug, getPost } from "../../lib/api";
export default function Post({ postData }) {
    const router = useRouter()

    const formatDate = date => {
        const newDate = new Date(date)

        return `${newDate.getDate()}/${
            newDate.getMonth() + 1
        }/${newDate.getFullYear()}`
        }
    
    return (
        <div className="container m-auto mt-20 p-4">
            <Head>
                <title>{postData.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className="main text-red-700">
                {router.isFallback ? (
                    <h2>Loading...</h2>
                ): (
                    <article className="article">
                        <div className="postmeta">
                            <h1 className="title">{postData.title}</h1>
                            <p>{formatDate(postData.date)}</p>
                        </div>
                        <div className="postcontent"
                            dangerouslySetInnerHTML={{__html: postData.content }} />
                    </article>
                )}
                <p>
                    <Link href='/blogs'>
                        <a>back to articles</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}


export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/blogs/${node.slug}`) || [],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const data = await getPost(params.slug)

    return {
        props: {
            postData: data.post
        }
    }
}