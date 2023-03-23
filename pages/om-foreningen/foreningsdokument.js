import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import { AiOutlineDownload } from "react-icons/ai";
import { createClient } from "contentful";


export default function foreningsdokument(props) {


  const sortedyearlyReports = props.protokoll.sort((a,b) => b.fields.year - a.fields.year).slice(0, 7)
  const sortedYearlyReport = props.arsredovisning.sort((a,b) => b.fields.year - a.fields.year).slice(0, 7)

  return (
    <>
      <Head>
        <title>Föreningsdokument</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="page-no-hero-placeholder"></div>

        <PageHeader
          breadcrumbs={[
            { text: "Hem", URL: "/" },
            { text: "Om föreningen", URL: "/om-foreningen" },
          ]}
          title={"Föreningsdokument"}
        />
      </div>
      <div className="spacing medium"></div>

      <div className="blanketter-och-dokument-container">
        <div className="blanketter-och-dokument-row flex-row-space-between">
          <h3>Protokoll från föreningsstämmor</h3>
          <div className="blanketter-och-dokument-right">
            {
              sortedyearlyReports.map(yearlyReport => {
                return (
                  <div  key={yearlyReport.fields.year}>
                  <hr/>
                  <div className="spacing small"></div>
                  <a
                    target="_blank"
                    href={yearlyReport.fields.protokoll.fields.file.url}
                    className="underline-text flex-row-align-center"
                  >
                    <AiOutlineDownload className="download-icon" />
                    <span>{yearlyReport.fields.titel}</span>
                  </a>
                  <div className="spacing small"></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="spacing double"></div>
      <div className="blanketter-och-dokument-container">
        <div className="blanketter-och-dokument-row flex-row-space-between">
          <h3>Årsredovisningar</h3>
          <div className="blanketter-och-dokument-right">
          {
              sortedYearlyReport.map(yearlyReport => {
                return (
                  <div  key={yearlyReport.fields.year}>
                  <hr/>
                  <div className="spacing small"></div>
                  <a
                    target="_blank"
                    href={yearlyReport.fields.rsredovisning.fields.file.url}
                    className="underline-text flex-row-align-center"
                  >
                    <AiOutlineDownload className="download-icon" />
                    <span>{yearlyReport.fields.title}</span>
                  </a>
                  <div className="spacing small"></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="spacing double"></div>
      <div className="blanketter-och-dokument-container">
        <div className="blanketter-och-dokument-row flex-row-space-between">
          <h3>Stadgar</h3>
          <div className="blanketter-och-dokument-right">
            <hr />
            <div className="spacing small"></div>

            <a
              download
              href="/dokument/stadgar_magelungen_2086_2018-10-30.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Stadgar</span>
            </a>
          </div>
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

  const protokoll = await client.getEntries({ content_type: "freningsstmmoprotokoll" });
  const arsredovisning = await client.getEntries({ content_type: "rsredovisning" });

  return {
    props: {
      protokoll: protokoll.items,
      arsredovisning: arsredovisning.items
    },
  };
}
