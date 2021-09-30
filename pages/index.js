import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";
import Link from "next/link";

export default function Home() {
  const resumeURL =
    "https://docs.google.com/document/d/1KAWSFoCAzmsCZ7gphts5fcd9CPDvDI9CIJ2-Ec16vZs/edit?usp=sharing";

  return (
    <Layout home>
      <Head>
        <title>Saunders Cox</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there! I go by Saunders and I use he/him pronouns.</p>
        <p>
          I'm a recent Computer Science B.S. graduate looking for full-time
          opportunities in Richmond and the DMV area.
        </p>
        <p>Here are some of my interests</p>
        <ul>
          <Link href="./posts/calisthenics">
            <li>
              <a>Calisthenics</a>
            </li>
          </Link>
          <li>Nutrition</li>
          <li>Rhythm Games</li>
          <li>Tetris</li>
          <li>Music Production</li>
        </ul>
      </section>
    </Layout>
  );
}
