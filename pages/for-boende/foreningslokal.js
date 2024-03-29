import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Gallery from "../../components/Gallery";
import PageHeader from "../../components/PageHeader";
import { createClient } from "contentful";
import { BiInfoCircle } from "react-icons/bi";

export default function foreningslokal(props) {
  const imageGalleryArray = props.imageGallery.fields.images.map((image) => {
    return `https:${image.fields.file.url}`;
  });
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
            src={`https://${props.heroImage.items[0].fields.image.fields.file.url}`}
          />
        </div>

        <PageHeader
          breadcrumbs={[
            { text: "Hem", URL: "/" },
            { text: "För boende", URL: "/for-boende" },
          ]}
          title={"Föreningslokal"}
        />
      </div>
      <div className="page-intro-text">
        <span className="bold-text">Vår omtyckta föreningslokal</span> ligger på
        Skebokvarnsvägen 265 (vid fastighetskontoret). Lokalen rymmer upp till
        50 personer och är utrustad med kök som har spis med ugn, diskmaskin,
        kaffebryggare, bestick, glas och porslin. Det finns även bord och stolar
        samt en TV.
        <br />
      </div>
      <div className="spacing medium"></div>
      <Gallery imageGalleryArray={imageGalleryArray} />
      <div className="spacing double"></div>
      <h2>Boka föreningslokalen</h2>
      <div className="spacing medium"></div>
      <div className="standard-text">
        Som medlem kan du boka möteslokalen. Nedan gäller för bokning
      </div>
      <div className="spacing medium"></div>
      <div className="important-box foreningslokal">
        <div className="important-info-text-container">
          <div className="info-icon-container">
            <BiInfoCircle className="info-icon" />
          </div>
          <div>
            <div className="standard-text">
              <span className="bold-text">Betalning</span> via inbetalningskort
              som erhålls vid bokning
            </div>
            <div className="spacing micro"></div>
            <div className="standard-text">
              <span className="bold-text">Kostnad</span> är 400 kr per tillfälle
            </div>
            <div className="spacing micro"></div>
            <div className="standard-text">
              <span className="bold-text">Deposition</span> på 500 kr betalas
              kontant och återfås efter syn av lokalen. Avdrag görs om lokalen
              är dåligt städad, vid klagomål av grannar etc. Avbokning måste ske senast 48h innar tillträde annars debiteras medlemmen full avgift.
            </div>
            <div className="spacing micro"></div>
            <div className="standard-text">
              <span className="bold-text">Bokning</span> sker via{" "}
              <Link href="/kontakt">
                <a className="underline-text">fastighetsexpeditionen</a>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="spacing double"></div>
      <div className="foreningslokal-ordningsregler-container">
        <h2>Ordningsregler</h2>
        <div className="spacing medium"></div>
        <ul className="standard-text">
          <li>
            Man har tillträde till lokalen kl 11.00 på tillträdesdagen till
            senast kl 10.00 dagen därpå om inte annat överenskommits.
          </li>
          <li>
            Musik får inte spelas efter kl 23.00 och volymen skall hållas på en
            sådan nivå att grannarna inte störs.
          </li>
          <li>Bilparkering utanför lokalen är förbjuden.</li>
          <li>Hyresgästen ansvarar för god ordning i lokalen och utanför</li>
          <li>
            Lokalen ska lämnas senast 01.00.
          </li>
        </ul>
      </div>
      <div className="spacing double"></div>
      <div className="foreningslokal-checklist-container">
        <h2>Checklista för städning*</h2>
        <div className="spacing medium"></div>
        <ul className="standard-text">
          <li>Allt porslin diskas och ställs in på avsedd plats</li>
          <li>
            Alla golv dammsugs och torkas med för ändamålet avsedda moppar som
            finns i städförrådet.
          </li>
          <li>Borden torkas av.</li>
          <li>
            Sopor tas med av förhyraren och slängs på avsedd plats, dvs inte i
            tidningscontainern utanför.
          </li>
          <li>
            Vid behov ska även planen utanför städas.
          </li>
        </ul>
        <div className="spacing small"></div>
        <div className="standard-text">
          *Föreningen tillhandalhåller soppåsar och städmaterial
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

  const heroImage = await client.getEntries({
    content_type: "freningslokalHero",
  });

  const imageGallery = await client.getEntry("3btiz6iZ7VBe9WRxAJFjkK");

  return {
    props: {
      heroImage: heroImage,
      imageGallery: imageGallery,
    },
  };
}
