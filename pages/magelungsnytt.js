import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MagelungsnyttPost from "../components/MagelungsnyttPost";
import { createClient } from "contentful";
import PageHeader from "../components/PageHeader";
import moment from "moment";

export default function magelungsNytt(props) {
  //get array of all years that magelungsnytt has been published
  let years = props.magelungsNytt
    .map((item) => {
      return moment(item.fields.date).format("yyyy");
    })
    .sort((a, b) => b - a);

  let uniqYears = [...new Set(years)];

  return (
    <>
      <Head>
        <title>Magelungsnytt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="page-hero-placeholder"></div>
      <PageHeader
        breadcrumbs={[{ text: "Hem", URL: "/" }]}
        title={"Magelungsnytt"}
      />
      <div className="page-intro-text">
        <span className="bold-text">Vårt nyhetsbrev Magelungsnytt</span>
        <span>
          {" "}
          kommer ungefär var tredje månad och innehåller nyheter kring allt
          möjligt som händer i föreningen. Vill du ta upp något som berör de
          boende i föreningen så kontakta styrelsen.
        </span>
      </div>
      <div className="spacing medium"></div>
      <div className="magelungsnytt-container">
        {uniqYears.map((year) => {
          console.log("year", year);
          return (
            <div className="magelungsnytt-year-row">
              {props.magelungsNytt.map((item) => {
                if (moment(item.fields.date).format("yyyy") === year) {
                  console.log("item", item.fields.title);
                  return (
                    <div>
                      <MagelungsnyttPost post={item} key={item.fields.title} />
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "magelungsnytt" });

  return {
    props: {
      magelungsNytt: res.items,
    },
  };
}
