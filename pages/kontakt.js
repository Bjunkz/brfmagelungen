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
            nyckelhantering, bokning av gästlägenhet med mera. Expeditionen är
            bemannad helgfria vardagar 07.00-07.30. Övriga tider går bra att
            ringa (tala in ett meddelande om ingen svarar så hör dom av sig)
            eller maila. Dom som jobbar på fastighetsexpeditionen är Kjell-Åke
            Nilsson och Pia Johansson.
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
          {filteredStyrelse.map((styrelsemedlem, index) => {
           return styrelsemedlem.fields.email ?  (
              <div className="contact-styrelsemedlem" key={index}>
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
            ) : 
            <div className="contact-styrelsemedlem" key={index}>
                <div className="spacing medium"></div>
                <div className="bold-text">
                  {styrelsemedlem.fields.namn}
                  {", "}
                  {styrelsemedlem.fields.styrelseroll}
                </div>
                <hr></hr>
              </div>
          })}
        </div>
      </div>
      <div className="spacing medium"></div>
      <div className="contact-container flex-row-space-between">
        <div className="contact-left-column bold-text">Valberedningen</div>
        <div>
          <div>
            Valberedningens främsta uppgift är att vara rådgivare åt
            föreningsstämman. Där tas beslut om vilka personer som ska ingå i
            styrelse, revisorsuppdrag och valberedning. Intresse till uppdragen
            kan lämnas när som helst under året.
          </div>
          <br></br>
          <div className="bold-text">Isabelle Ekstrand</div>
          <div className="spacing small"></div>
          <div className="bold-text">Johan Jonsson</div>
          <div className="spacing small"></div>
          <div className="bold-text">Zohra Memmi</div>
          <div className="spacing small"></div>
          {/* <span className="bold-text">E-post: </span>

          <a className="mail-link" href="mailto: Anette_uddqvist@hotmail.com">
          Anette_uddqvist@hotmail.com
          </a> */}
          {/* <div className="spacing medium"></div>
          <div className="bold-text" href="mailto: l.mettala@gmail.com">
            Katarina Wohlfart
          </div>
          <div className="spacing small"></div>

          <span className="bold-text">E-post: </span>

          <a className="mail-link" href="mailto:katarina_wohlfart@hotmail.com">
          katarina_wohlfart@hotmail.com
          </a>
          <div className="spacing small"></div>
          <span className="bold-text">tel: </span>
          <a href={"tel:  0706709968"} className="underline-text">
          0706709968
          </a>
          <hr></hr>
          <div className="spacing small"></div> */}
        </div>
      <div className="spacing medium"></div>

      </div>
      <div className="contact-container flex-row-space-between">
        <div className="contact-left-column bold-text">Revisor</div>
        <div>
          <div>
            Revisorns uppgift är att granska föreningens ekonomi och styrelsens
            arbete så att medlemmarnas intressen efterföljs.
          </div>
          <br></br>
          <div className="bold-text">George Lundqvist</div>
          <div className="spacing small"></div>
          <span className="bold-text">E-post: </span>
          <a className="mail-link" href="mailto: georgi.lund@gmail.com">
            georgi.lund@gmail.com
          </a>
          <div className="spacing small"></div>
          <hr></hr>
          <div className="spacing small"></div>
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

  const res = await client.getEntries({ content_type: "styrelsemedlem" });

  return {
    props: {
      styrelsemedlemmar: res.items,
    },
  };
}
