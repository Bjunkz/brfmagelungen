import { FaArrowRight } from "react-icons/fa";
import moment from "moment";
import "moment/locale/sv";
import ReactMarkdown from "react-markdown";

export default function NewsPost(newsPost) {
  let dayMonth = moment(newsPost.newsPost.sys.createdAt).format("D MMMM");
  let year = moment(newsPost.newsPost.sys.createdAt).format("YYYY");

  return (
    <>
      <div className="news-post-container standard-padding">
        <div className="news-post-container-border">
          <div className="flex-row-space-between promo-top-row ">
            <span className="no-margin news-post-date">
              <span className="news-post-dayMonth">{dayMonth}</span>
              <span className="news-post-year"> {year}</span>
            </span>
            {/* <FaArrowRight className="arrow-right" /> */}
          </div>
          <div className="spacing medium"></div>
          <h3>{newsPost.newsPost.fields.rubrik}</h3>
          <div className="spacing small"></div>
          <p className="no-margin news-post-text">
            <ReactMarkdown>{newsPost.newsPost.fields.nyhetstext}</ReactMarkdown>
          </p>
        </div>
      </div>
    </>
  );
}
