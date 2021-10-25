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
      <h1>Calisthenics {props.peepee}</h1>

      <h4>
        I first began my calisthenics journey through r/bodyweightfitness's{" "}
        <Link href={rrURL}>
          <a> recommended routine.</a>
        </Link>
      </h4>

      <h2>A Gymless Lifestyle</h2>
      <p>
        I grew up in two separate households, alternating every half a week.
        Whenever it was time to go to the other house, I'd pack up my backpack
        with everything I'd want to take with me. This led me to adapt a
        minimalist lifestyle early on in my life.
      </p>
      <p>
        Fast forward to independent life, and it became such that anything that
        I considered worth keeping was anything that I could travel with in my
        car. I keep as few subscriptions as possible, I budget out my home
        cooked meals, my phone home screen is simplified, and my fitness goals
        exist to maintain good health.
      </p>
      <p>
        I'd been a part of a gym through my dad's subscription, but after
        completing school, I was on my own more, visiting friends that were
        hundreds of miles apart. No subscription could address that nomad
        lifestyle.
      </p>

      <h2></h2>
    </Layout>
  );
}
