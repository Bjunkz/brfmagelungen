import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import PageHeader from "../components/PageHeader";

export default function kontakt(props) {
  const filteredStyrelse = props.styrelsemedlemmar.sort((a, b) => {
    let fa = b.fields.styrelseroll;
    let fb = a.fields.styrelseroll;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  console.log(filteredStyrelse);
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page-no-hero-placeholder"></div>
      <PageHeader breadcrumbs={[{ text: "Hem", URL: "/" }]} title={"Kontakt"} />
      <div className="spacing medium"></div>
      <div className="contact-container flex-row-space-between">
        <div className="contact-left-column bold-text">
          Fastighetsexpeditionen
        </div>
        <div>
          <div>
            Du kan kontakta fastighetsexpeditionen i ärenden som felanmälan,
            nyckelhantering, bokning av gästlägenhet med mera.
          </div>
          <br></br>
          <span className="bold-text">E-post: </span>
          <a className="mail-link" href="mailto: fastighet@brfmagelungen.se">
            fastighet@brfmagelungen.se
          </a>
          <div className="spacing small"></div>
          <span className="bold-text">Tel</span>:{" "}
          <a href="tel:08-864287" className="underline-text">
            08-864287
          </a>{" "}
        </div>
      </div>
      <div className="spacing double"></div>
      <div className="contact-container flex-row-space-between">
        <div className="contact-left-column bold-text">Styrelsen</div>
        <div>
          <div>
            Styrelsen ansvarar för att allting i föreningen fungerar som det ska
            avseende ekonomi, underhåll, skötsel etc. Kontakta gärna styrelsen
            om du har förslag eller frågor rörande föreningen.
          </div>
          <br></br>
          <span className="bold-text">E-post: </span>
          <a className="mail-link" href="mailto: styrelse@brfmagelungen.se">
            styrelse@brfmagelungen.se
          </a>
          <div className="spacing small"></div>
          <hr></hr>
          <div className="spacing small"></div>
          {filteredStyrelse.map((styrelsemedlem) => {
            return (
              <div className="contact-styrelsemedlem">
                <div className="spacing medium"></div>
                <div className="bold-text">
                  {styrelsemedlem.fields.namn}
                  {", "}
                  {styrelsemedlem.fields.styrelseroll}
                </div>
                <div className="spacing small"></div>
                <span className="bold-text">E-post: </span>
                <a
                  className="mail-link"
                  href={"mailto:" + styrelsemedlem.fields.email}
                >
                  {styrelsemedlem.fields.email}
                </a>
                <span></span>
                <div className="spacing small"></div>
                <span className="bold-text">tel: </span>
                <a
                  href={"tel:" + styrelsemedlem.fields.telefonnummer}
                  className="underline-text"
                >
                  {styrelsemedlem.fields.telefonnummer}
                </a>

                <div className="spacing medium"></div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "styrelsemedlem" });

  return {
    props: {
      styrelsemedlemmar: res.items,
    },
  };
}
