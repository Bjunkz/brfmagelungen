import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'contentful' 
import NewsPost from '../components/NewsPost'

export default function Home({news}) {
  return (
    <>
        <Head>
        <title>HSB Brf Magelungen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>

        <div className='home-container'>

          <div className='hero-img-wrapper'>
          <Image src='/../public/hero.jpg' layout='fill' className='hero-img'/>
          </div>
        
         </div>


        <div>
        {news.map(newsPost => {
          return <NewsPost newsPost={newsPost} />
        })}
      </div>
    </>
    
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({content_type: 'nyhet'})

  return {
    props: {
      news: res.items
    },
  }
}