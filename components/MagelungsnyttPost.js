import moment from "moment";

export default function MagelungsnyttPost(post) {
  return (
    <>
      <a
        target="_blank"
        href={"https://" + post.post.fields.magelungsnyttPdf.fields.file.url}
        rel="noopener noreferrer"
      >
        <div className="magelungsnytt-post">
          <div className="magelungsnytt-post-top-headline">MAGELUNGSNYTT</div>
          <div className="spacing small"></div>
          <div className="magelungsnytt-post-number">
            Nr. {post.post.fields.magelungsnyttNummer}
          </div>
          <div className="spacing small"></div>
          <div className="magelungsnytt-post-year">
            {moment(post.post.fields.date).format("yyyy")}
          </div>
          <div className="spacing small"></div>

          <div className="magelungsnytt-link">Läs nyhetsbrevet</div>
        </div>
      </a>
    </>
  );
}
