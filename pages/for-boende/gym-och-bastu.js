import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export default function gymAndSauna() {
  return (
    <>
      <Head>
        <title>Gym och Bastu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="page-no-hero-placeholder"></div>

      <PageHeader
        breadcrumbs={[
          { text: "Hem", URL: "/" },
          { text: "För boende", URL: "/for-boende" },
        ]}
        title={"Gym och Bastu"}
      />
      <div className="page-intro-text">
        <span className="bold-text">
          Föreningen har ett gym på Skebokvarnsvägen 298 och en bastu på
          Skebokvarnsvägen 294 (igång från gaveln).
        </span>{" "}
        För närvarande är gymmet stängt pga fuktskada. Styrelsens förhoppning är
        att kunna öppna gymmet till hösten 2022. Har du tips eller önskemål om
        utrustning eller liknande vänligen{" "}
        <Link href="/kontakt">
          <a className="page-intro-text-link">kontakta styrelsen.</a>
        </Link>
        <br />
        <span>
          {" "}
          Felanmälan görs till{" "}
          <Link href="/kontakt">
            <a className="page-intro-text-link">Fastighetsexpeditionen</a>
          </Link>
        </span>
      </div>
      <div className="spacing medium"></div>
      <div className="page-more-text">
        Bastun går att boka tre timmar i taget mellan 07.00-22.00. Bokning görs
        på panelen som sitter på väggen utanför entrén till bastun. Tänk på att
        hålla ner ljudnivån då det är väldigt lyhört till de boende kring
        bastu-området.
      </div>

      <div className="spacing medium"></div>
    </>
  );
}
