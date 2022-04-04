import Link from 'next/link'
import Image from 'next/image'

export default function NewsPost (newsPost) {
    return(
        <>
        <div>
            <h3>{newsPost.newsPost.fields.rubrik}</h3>
            <p>{newsPost.newsPost.fields.nyhetstext}</p>

        </div>
        
        </>
    )
}