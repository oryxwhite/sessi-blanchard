import { useRouter } from "next/router";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import { server } from '../../lib/config'
import { format, parse } from 'fecha'

import { getAllPostsWithSlug, getPost } from "../../lib/api";
export default function Post({ postData }) {
    const router = useRouter()

    // const formatDate = date => {
    //     const newDate = new Date(date)

    //     return `${newDate.getDate()}/${
    //         newDate.getMonth() + 1
    //     }/${newDate.getFullYear()}`
    //     }

    const formatDate = date => {
        return format(parse(date, 'isoDateTime'), 'longDate')
    }    
    
    return (
        <div className="container m-auto mt-20 p-4">
            <Head>
                <title>{postData?.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className="main text-white">
                {router.isFallback ? (
                    <h2>Loading...</h2>
                ): (
                    <article className="article">
                        <div className="postmeta">
                            <h1 className=" text-4xl mb-2">{postData.title}</h1>
                            <p className=" mb-10 italic">{formatDate(postData.date)}</p>
                        </div>
                        <div className="postcontent mb-10"
                            dangerouslySetInnerHTML={{__html: postData.content }} />
                    </article>
                )}
                <p>
                    <Link href='/blogs'>
                        <a className=" font-bold text-red-600">Back to articles</a>
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
        },
        revalidate: 1,
    }
}