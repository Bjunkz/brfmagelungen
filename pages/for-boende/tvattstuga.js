import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export default function washingRoom() {
  return (
    <>
      <Head>
        <title>Tvättstuga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="page-no-hero-placeholder"></div>

      <PageHeader
        breadcrumbs={[
          { text: "Hem", URL: "/" },
          { text: "För boende", URL: "/for-boende" },
        ]}
        title={"Tvättstuga"}
      />
      <div className="page-intro-text">
        <span className="bold-text">
          Föreningen har fyra tvättstugor på adresser Skebokvarnsvägen 257, 273, 282, 296. 
        </span>{" "}
        För att boka tvättid kan man använda aptus via dator eller mobil på denna länk <a className="page-intro-text-link" href="https://magelungen.aptustotal.se/">APTUSPORTAL</a>.
        <br/>
        Där använder du inloggningsuppgifter som erhålls utav
        {" "}
        <Link href="/kontakt">
            <a className="page-intro-text-link">fastighetsskötarna</a>
          </Link>
        <br />
      </div>
      <div className="spacing medium"></div>
      <div className="page-more-text">
      Du kan även använda aptus app på mobilen.<br/>
    <a href="https://play.google.com/store/apps/details?id=se.aptus.android.booking" className="page-intro-text-link">Android</a><br/>
    <a href="https://geo.itunes.apple.com/se/app/bokning/id380639000?mt=8" className="page-intro-text-link">iPhone/iOS</a>
    <br/>
    För att använda appen gör följande:<br/> Mata in anslutningsuppgifter.<br/>
När appen körs igång första gången kommer inställningssidan upp. Börja med att mata in adressuppgifter till den webbplats där Bokning installerats, I ert fall blir det
https://magelungen.aptustotal.se/Bookingservice
Mata sedan in ditt användarnamn respektive lösenord. Det är samma uppgifter som du använder för inloggning till bokning via webben.
      </div>

      <div className="spacing medium"></div>
    </>
  );
}
