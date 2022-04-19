import moment from "moment"

export default function MagelungsnyttPost (post) {
    console.log("magnytt post", post)
    return(
        <>         
        <a href={post.post.fields.magelungsnyttPdf.fields.file.url}>
         <div className="magelungsnytt-post">
             <div className="magelungsnytt-post-top-headline">MAGELUNGSNYTT</div>
             <div className="spacing small"></div>
             <div className="magelungsnytt-post-number">Nr. {post.post.fields.magelungsnyttNummer}</div>
             <div className="spacing small"></div>
             <div className="magelungsnytt-post-year">{moment(post.post.fields.date).format('yyyy')}</div>
             <div className="spacing small"></div>
             
                 <div className="magelungsnytt-link">Läs nyhetsbrevet</div>
             </div>
             </a>
        </>
    )
}