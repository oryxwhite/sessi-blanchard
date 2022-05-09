import { getAllPosts } from '../../lib/api';
import Link from 'next/link';
import Head from 'next/head';
import { server } from '../../lib/config' 
import { format, parse } from 'fecha'

export default function Blog({ allPosts: { edges } }) {
  
  return (
    <div className=''>
    <Head>
      <title>Blog articles page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='text-white container m-auto mt-20 p-4'>
      {/* <h1 className='title'>Latest blog articles</h1>
      <hr /> */}
      <section className=''>
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
            <div className='m-auto mb-12 w-11/12 max-w-[600px]'>
              <h2 className='font-serif text-3xl font-bold mb-6'>{node.title}</h2>
              <article className='mb-4 ' dangerouslySetInnerHTML={{__html: node.excerpt} } />
              <div className='italic '>{format(parse(node.date, 'isoDateTime'), 'longDate')}</div>
              <Link  href={`${server}/blogs/${node.slug}`}>
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