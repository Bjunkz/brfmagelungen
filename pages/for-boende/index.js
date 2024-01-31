import Head from "next/head";
import Image from "next/image";
import FAQ from "../../components/FAQ";
import { createClient } from "contentful";
import PageHeader from "../../components/PageHeader";

const forMembers = ({ FAQS, image }) => {
  return (
    <>
      <Head>
        <title>För Boende</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="page-hero-placeholder">
          <img
            className="page-hero-image"
            src={`https://${image.includes.Asset[0].fields.file.url}`}
            // width="1500px"
            // height="600px"
            alt="bild på föreningslokalen"
          />
        </div>

        <PageHeader
          breadcrumbs={[{ text: "Hem", URL: "/" }]}
          title={"För boende"}
          links={[
            {
              linkText: "Blanketter och dokument",
              URL: "/for-boende/blanketter-och-dokument",
            },
            { linkText: "Föreningslokal", URL: "/for-boende/foreningslokal" },
            { linkText: "Gästlägenhet", URL: "/for-boende/gastlagenhet" },
            { linkText: "Bastu", URL: "/for-boende/bastu" },
            { linkText: "Tvättstuga", URL: "/for-boende/tvattstuga" },
          ]}
        />
        <div className="spacing medium"></div>
        <div className="page-intro-text">
          <span className="bold-text">
            Här finns information som rör dig som bor i föreningen.
          </span>{" "}
          Fastighetsexpeditionen ligger på Skebokvarnsvägen 265 (ingång från
          gatan) och är bemannad helgfria vardagar 07.00-07.30. Övriga tider kan
          man lämna meddelande på telefonsvararen, telefon{" "}
          <a href="tel:08-86 42 87">08-86 42 87</a>, som avlyssnas flera gånger
          under dagen eller e-post till{" "}
          <a className="mail-link" href="mailto: fastighet@brfmagelungen.se">
            fastighet@brfmagelungen.se
          </a>{" "}
          <br />
        </div>

        <div className="spacing medium"></div>

        <div className="page-more-text">
          Föreningen har två fastighetsskötare,<br></br> Kjell-Åke Nilsson och
          Pia Johansson.
          <br />
          <div className="spacing small"></div>
          Vid fel under kvällstid och helger kontakta alltid först Kjell-Åke
          Nilsson, tel <a href="tel:0707-14 43 92">0707-14 43 92</a> innan ev
          jourmontör kontaktas.
          <br />
          <div className="spacing small"></div>
          Akuta fel som inträffar efter ordinarie arbetstids slut samt helger
          som kräver omedelbara åtgärder och som inte kunnat avhjälpas genom
          anvisningar från Kjell-Åke anmäls till: JOURMONTÖR AB telefon{" "}
          <a
            href="tel:08-657
          77 22"
          >
            08-657 77 22
          </a>
        </div>
        <div className="spacing double"></div>

        <FAQ FAQ={FAQS} />
      </div>
    </>
  );
};

export default forMembers;

export async function getServerSideProps() {
  console.log("get static props");
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "faq",
  });
  const image = await client.getEntries({
    content_type: "frBoendeHero",
  });

  return {
    props: {
      FAQS: res.items,
      image: image,
    },
  };
}
