import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { AiOutlineDownload } from "react-icons/ai";

export default function foreningsdokument() {
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
            <hr />
            <div className="spacing small"></div>

            <a
              download
              href="/dokument/protokoll/stammoprotokoll2022.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2022</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/protokoll/stammoprotokoll2021.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2021</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/protokoll/stammoprotokoll2020.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2020</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/protokoll/stammoprotokoll2019.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2019</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/protokoll/stammoprotokoll2018.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2018</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/protokoll/stammoprotokoll2017.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2017</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/protokoll/stammoprotokoll2016.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Föreningsstämmoprotokoll 2016</span>
            </a>
          </div>
        </div>
      </div>
      <div className="spacing double"></div>
      <div className="blanketter-och-dokument-container">
        <div className="blanketter-och-dokument-row flex-row-space-between">
          <h3>Årsredovisningar</h3>
          <div className="blanketter-och-dokument-right">
            <hr />
            <div className="spacing small"></div>

            <a
              download
              href="/dokument/redovisning/arsredovisning_brfmagelungen_2021.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Årsredovisning 2021</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>

            <a
              download
              href="/dokument/redovisning/arsredovisning_brfmagelungen_2020.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Årsredovisning 2020</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/redovisning/arsredovisning_brfmagelungen_2019.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Årsredovisning 2019</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/redovisning/arsredovisning_brfmagelungen_2018.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Årsredovisning 2018</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/redovisning/arsredovisning_brfmagelungen_2017.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Årsredovisning 2017</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
            <a
              download
              href="/dokument/redovisning/arsredovisning_brfmagelungen_2016.pdf"
              className="underline-text flex-row-align-center"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Årsredovisning 2016</span>
            </a>
            <div className="spacing small"></div>
            <hr />
            <div className="spacing small"></div>
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
