import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MagelungsnyttPost from "../../components/MagelungsnyttPost";
import PageHeader from "../../components/PageHeader";
import SpeedFacts from "../../components/SpeedFacts";
import { createClient } from "contentful";

export default function about({ image, facts }) {
  return (
    <>
      <Head>
        <title>Om föreningen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page-hero-placeholder">
        <img
          className="page-hero-image"
          src={`https://${image.includes.Asset[0].fields.file.url}`}
          // width="1500px"
          // height="600px"
          alt="bild på en av föreningens fastigheter"
        />
      </div>
      <PageHeader
        breadcrumbs={[{ text: "Hem", URL: "/" }]}
        title={"Om föreningen"}
        links={[
          {
            linkText: "Föreningsdokument",
            URL: "/om-foreningen/foreningsdokument",
          },
        ]}
      />
      <div className="spacing medium"></div>

      <div className="page-intro-text">
        <span className="bold-text">Välkommen till Brf Magelungen</span>
        <span>
          {" "}
          Brf Magelungen ligger i söderförorten Högdalen i Stockholm - Vantörs
          församling - med adresser Skebokvarnsvägen och Önskehemsgatan.
          <br></br>
          Föreningen bildades 1954 och första inflyttningarna ägde rum 1956.
        </span>
      </div>

      <div className="spacing medium"></div>

      <div className="page-more-text">
        Föreningen innehar tomträtten till, samt äger och förvaltar, byggnaderna
        på fastigheterna kv. Ledstången samt Skärmväggen 1 och 2. Föreningens
        fastigheter innehåller ca 500 lägenheter fördelade på 4 st 10-vånings
        höghus och 11 st 3-vånings låghus, 35 garage och ett antal lokaler
        inklusive 4 st tvättstugor.
        <br />
        <div className="spacing small"></div>
        Föreningen köper tjänsten ekonomisk/administrativ förvaltning av HSB
        Stockholm. Förvaltare är David Olsson.
        <br />
        <div className="spacing small"></div>
        Senaste stambytet skedde 2001-2003.
        <br />
        <div className="spacing medium"></div>
        <b>Finns det några planerade avgiftsförändringar? </b><br/>
        Avgiften höjdes med 7% vid årsskiftet 24/25. Inga flera höjningar är planerade under året.<br />
        <div className="spacing small"></div>
       <b>Finns det några planerade renoveringar? Hur kommer dessa finansieras?</b><br/>
       Inga planerade renoveringar för 2024, undersökning pågår kring reliningbehov.  Större renoveringar av bl.a. fasad och fönster är planerade inom en tioårsperiod och kommer finansieras genom lån och eget sparande.  
        <br />
        <div className="spacing small"></div>
      <b>Har föreningen utfört några större renoveringar av fastigheten? Om ja, vilka och vilket årtal? (stammar, fönster, tak, fasad, el, tvättstuga).</b><br/>
      Stambyten 2001. Underhållsplan finns och uppdateras löpande.
      <br />
        <div className="spacing small"></div>
        <b>Godkänner föreningen delat ägande?</b><br/>
         Ja, lägsta ägarandel är 10%
        <br />
        <div className="spacing small"></div>
        <b>Hur många hyresrätter har ni?</b><br/>
        0
        <br />
        <div className="spacing small"></div>
        <b>Äger föreningen marken? Om inte, när löper gällande tomträttsavtal ut?</b><br/>
         Nej, det finns flera tomträttsavtal som löper ut tidigast 2028 och senast 2035.
        <br/>
        <div className="spacing small"></div>
        <b>Vad ingår i månadsavgiften? </b><br/>
        Värme, vatten och ett fåtal kanaler ingår, bredband ingår ej
        <br />
        <div className="spacing small"></div>
        <b>Ingår bostadsrättstillägg i avgiften?</b> <br />
         Nej, tecknas av innehaven själv 
         <br />
        <div className="spacing small"></div>
        <b>Har föreningen källarförråd eller vindsförråd? Ingår de i avgiften?</b> <br />
        Källarförråd i låghusen och vindsförråd i höghusen, i vissa fall ingår både och. De ingår i avgiften.
        <br />
        <div className="spacing small"></div>
       <b> Vilken leverantör för kabel-TV och bredband har ni? Vilken hastighet och ingår det i månadsavgiften?</b><br/>
        Innehaven får själv teckna avtal med önskad hastighet. Telenor är leverantör av bredband och Tele2 för tv (Tele2 kan också leverera internet, men då ej fiber).
        <br />
        <div className="spacing small"></div>
        <b>Finns det garage- och/eller parkeringsplats? Finns det några lediga platser i dagsläget eller är det kö? Hur många? Avgift per månad?</b><br/>
   
        Föreningen har 117 parkeringsplatser och 35 garage. Det är kötid för både parkeringsplats och garage, väntetiden för parkering är cirka 2 år och garage cirka 6-8 år.
        <br />
        <div className="spacing small"></div>


      </div>

      <div className="spacing double"></div>

      <SpeedFacts facts={facts.items} />

      <div className="spacing double"></div>
    </>
  );
}

export async function getServerSideProps() {
  console.log("get static props");
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const image = await client.getEntries({
    content_type: "aboutHeroImage",
  });
  const facts = await client.getEntries({
    content_type: "snabbfakta",
  });

  return {
    props: {
      image: image,
      facts: facts,
    },
  };
}
