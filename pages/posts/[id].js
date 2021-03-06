import Layout from '../../components/layout';
//import { getAllPostIds } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

//getAllPostIds returns an array of objects of type {params: {id:xxx}}.  see use below
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, //If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.  //for try https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
  };
}
// export default function Post() {
//   return <Layout>...</Layout>;
// }

// postData comes from getStaticProps
export default function Post({ postData }) {
  return (
    <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
  );
}