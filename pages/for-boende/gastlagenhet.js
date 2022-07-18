import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { createClient } from "contentful";
import Gallery from "../../components/Gallery";

export default function guestApartment(props) {
  const imageGalleryArray =
    props.imageGallery.fields.gstlgenhetGalleryImage.map((image) => {
      return `https:${image.fields.file.url}`;
    });

  return (
    <>
      <Head>
        <title>Gästlägenhet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="page-hero-placeholder">
        <img
          src={`https://${props.heroImage.includes.Asset[0].fields.file.url}`}
          width="1500px"
          height="600px"
        />
      </div>

      <PageHeader
        breadcrumbs={[
          { text: "Hem", URL: "/" },
          { text: "För boende", URL: "/for-boende" },
        ]}
        title={"Gästlägenhet"}
      />
      <div className="page-intro-text">
        <span className="bold-text">
          Boende kan hyra gästlägenheten som ligger på Skebokvarnsvägen 271.
        </span>{" "}
        Kontakta fastighetsexpeditionen för bokning.
        <br />
      </div>

      <div className="spacing medium"></div>
      <Gallery imageGalleryArray={imageGalleryArray} />
      <div className="spacing medium"></div>

      <div className="page-more-text">
        Nyckelbricka och inbetalningskort hämtas på fastighetsexpeditionen.
        <br></br>
        Kostnad 300 kronor/dygn, max 7 dagar i följd.<br></br> Deposition 500
        kronor som återfås efter kontroll av lägenheten. <br></br>Inflyttning kl
        14:00 uthyrningsdagen.<br></br> utflyttning kl 12:00 avflyttningsdagen.
        <br />
        <div className="spacing small"></div>
        I lägenheten finns 2 sängplatser, 2 sängplatser i bäddsoffa, kuddar och
        täcken. Sänglinne och handdukar håller man med själv.
        <br />
        <div className="spacing small"></div>
        Lägenheten är utrustad med tallrikar, bestick, glas o muggar, TV, radio,
        kaffebryggare, vattenkokare, mikro, spishäll, kylskåp, dush och toalett.
        <br />
        Lägenheten skall vid avresa vara väl städad och lämnas i samma skick som
        vid uthyrningstillfället. Nyckelbricka återlämnas till
        fastighetsexpeditionen.
      </div>
    </>
  );
}

export async function getStaticProps() {
  console.log("get static props");
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const heroImage = await client.getEntries({
    content_type: "gstlgenhetHero",
  });
  const imageGallery = await client.getEntry("21QWE12eI5W5QwDC7ZmRIL");

  return {
    props: {
      heroImage: heroImage,
      imageGallery: imageGallery,
    },
  };
}
