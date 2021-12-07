import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Conundrum(props) {
  return (
    <Layout whichActive="conundrum">
      <Head>
        <title>Conundrum</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Conundrum</h1>
        <h4>Stuff</h4>
        <p>Stuff</p>
      </section>
    </Layout>
  );
}
