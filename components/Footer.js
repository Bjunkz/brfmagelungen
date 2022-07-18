import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="spacing medium"></div>
      <div className="flex-row footer-container">
        <div className="footer-headline">
          <a href="#top">BRF Magelungen</a>
        </div>
        <div className="footer-contact-column">
          <a className="mail-link" href="mailto: styrelse@brfmagelungen.se">
            styrelse@brfmagelungen.se
          </a>
          <div className="spacing small"></div>
          <a className="mail-link" href="mailto: fastighet@brfmagelungen.se">
            fastighet@brfmagelungen.se
          </a>
          <div className="spacing medium"></div>
          <div>
            <span className="bold-text">Tel</span>:{" "}
            <a href="tel:08-864287" className="underline-text">
              08-864287
            </a>
          </div>
          <div className="spacing medium"></div>
          <div>
            Skebokvarnsvägen 265
            <div className="spacing micro"></div>
            124 53 Bandhagen
          </div>
        </div>
        <div>
          <div className="footer-site-links-container">
            <Link href="/om-foreningen">
              <a className="footer-link">Om föreningen</a>
            </Link>
            <Link href="/for-boende">
              <a className="footer-link">För boende</a>
            </Link>
            <Link href="/magelungsnytt">
              <a className="footer-link">Magelungsnytt</a>
            </Link>
            <Link href="/kontakt">
              <a className="footer-link">Kontakt</a>
            </Link>
            <a
              className="footer-link"
              href="https://www.hsb.se/"
              target="_blank"
            >
              HSB.se
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
