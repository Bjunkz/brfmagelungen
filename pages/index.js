import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import NewsPost from "../components/NewsPost";
import Promo from "../components/Promo";
import Link from "next/link";
import Script from "next/script";

export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>HSB Brf Magelungen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4CLY6EF7E0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4CLY6EF7E0');`}
        </Script>
      </Head>

      <div className="home-container">
        <div className="hero-img-wrapper">
          <Image
            src="/hero.jpg"
            layout="fill"
            objectFit="cover"
            className="hero-img"
            priority={true}
          />
        </div>

        <div className="spacing double"></div>
        <div className="spacing double"></div>
        <h1 className="home-welcome-h1">
          Välkommen till HSB BRF
          <br /> Magelungen i Högdalen,
          <br /> Stockholm
        </h1>
        <div className="spacing double"></div>
        <Link href="/om-foreningen">
          <button className="standard-button">Läs mer om föreningen</button>
        </Link>
      </div>

      <div className="spacing double"></div>
      <div className="snabblankar">
        <h3>Snabblänkar</h3>
        <div className="spacing medium"></div>
        <div className="promo-section flex-row-space-between">
          <Promo
            headline="TVÄTTSTUGA"
            text="Här kan du boka tvättstuga online"
            link="https://magelungen.aptustotal.se/AptusPortal/Account/Login?ReturnUrl=%2fAptusPortal%2f"
            internal={false}
          />
          <Promo
            headline="MÄKLARINFO"
            text="Information om föreningen till mäklare"
            link="/om-foreningen"
            internal={true}
          />
          <Promo
            headline="PORTTELEFON"
            text="Såhär använder du porttelefonen i höghusen"
            link="https://www.hsb.se/contentassets/5529b2481df44057980dbe427f58ebec/ringa20170720anvc3a4ndarmanual20swe20rev2.pdf"
            internal={false}
          />
        </div>
      </div>

      <div className="spacing double"></div>

      <div className="news-container">
        <h3>Nyheter</h3>
        <div className="spacing medium"></div>
        <div className="news-container-grid">
          {news.map((newsPost, index) => {
            return <NewsPost newsPost={newsPost} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "nyhet" });

  return {
    props: {
      news: res.items,
    },
  };
}
