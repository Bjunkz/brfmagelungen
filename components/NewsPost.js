import Link from 'next/link'
import Image from 'next/image'

export default function NewsPost (newsPost) {
    return(
        <>
        <div className='news-post-container standard-padding'>
            <h3 className='no-margin'>{newsPost.newsPost.fields.rubrik}</h3>
            <div className='spacing medium'></div>
            <p className='no-margin'>{newsPost.newsPost.fields.nyhetstext}</p>
        </div>
        
        </>
    )
}