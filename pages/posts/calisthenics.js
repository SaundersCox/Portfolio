import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Calisthenics() {
  const rrURL =
    "https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/";

  return (
    <Layout>
      <Head>
        <title>Calisthenics</title>
      </Head>
      <h1>Calisthenics</h1>
      <p>
        I first began my calisthenics journey through r/bodyweightfitness's{" "}
        <Link href={rrURL}>
          <a>recommended routine.</a>
        </Link>
      </p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
