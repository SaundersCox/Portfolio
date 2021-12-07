import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Coding(props) {
  return (
    <Layout>
      <Head>
        <title>Coding</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Coding</h1>
        <h4>Stuff</h4>
        <p>Stuff</p>
      </section>
    </Layout>
  );
}
