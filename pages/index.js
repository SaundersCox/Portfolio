import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Nav from "../components/Nav";

export default function Home() {
  const resumeURL =
    "https://docs.google.com/document/d/1YLn5HjnVFYsH7TyX36Y9YxULPJuGwHC24Sa-aR6ito0/edit?usp=sharing";
  return (
    <Layout home>
      <title>Saunders Cox</title>
      <section className={utilStyles.headingMd}>
        <p>Hey there! I go by Saunders and I use he/him pronouns.</p>
        <p>
          I graduated from Virginia Tech with a Computer Science B.S. and I
          curerntly work remotely in Richmond, Virginia.
        </p>
      </section>
    </Layout>
  );
}
