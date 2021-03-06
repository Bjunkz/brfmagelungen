import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Promo(promo) {
  return (
    <>
      {promo.internal ? (
        <Link href={promo.link}>
          <div className="promo-container flex-column-space-between standard-padding">
            <div className="flex-row-space-between promo-top-row">
              <h3 className="promo-headline">{promo.headline}</h3>
              <FaArrowRight className="arrow-right" />
            </div>
            <p className="standard-text promo-desktop-text">{promo.text}</p>
          </div>
        </Link>
      ) : (
        <a href={promo.link} target="_blank" rel="noopener noreferrer">
          <div className="promo-container flex-column-space-between standard-padding">
            <div className="flex-row-space-between promo-top-row">
              <h3 className="promo-headline">{promo.headline}</h3>
              <FaArrowRight className="arrow-right" />
            </div>
            <p className="standard-text promo-desktop-text">{promo.text}</p>
          </div>
        </a>
      )}
    </>
  );
}
