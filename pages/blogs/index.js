import { getAllPosts } from '../../lib/api';
import Link from 'next/link';
import Head from 'next/head';


export default function Blog({ allPosts: { edges } }) {
  
  return (
    <div className='container'>
    <Head>
      <title>Blog articles page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='main text-red-100 m-auto mt-10 w-9/12'>
      {/* <h1 className='title'>Latest blog articles</h1>
      <hr /> */}
      <section>
        {edges.map(({ node }) => (
          <div className='listitem' key={node.id}>
            <div className='listitemthumbnail'>
              <figure>
                {/* <img
                  src={node.extraPostInfo.thumbImage.mediaItemUrl}
                  alt={node.title}
                /> */}
              </figure>
            </div>
            <div className='mb-12 font-sans'>
              <h2 className=' font-serif text-2xl font-bold mb-4'>{node.title}</h2>
              {/* slice removes the p tags that wordpress includes by default */}
              <h3 className='mb-7'>{node.excerpt.slice(3, -5)}</h3>
              <Link  href={`/blogs/${node.slug}`}>
                <a className='text-red-800 font-bold'>Read more </a>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  </div>
);
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}