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

    <main className='main flex flex-column justify-center items-center text-white mt-10 mx-4 '>
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
              <h2 className='font-serif justify-self-center text-3xl font-bold  ml- mb-6'>{node.title}</h2>
              <article className='mb-4' dangerouslySetInnerHTML={{__html: node.excerpt} } />
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