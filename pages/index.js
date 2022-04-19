import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'contentful' 
import NewsPost from '../components/NewsPost'
import Promo from '../components/Promo'

export default function Home({news}) {
  return (
    <>
        <Head>
        <title>HSB Brf Magelungen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>

        <div className='home-container'>

            <div className='hero-img-wrapper'>
              <Image src='/hero.jpg' layout='fill' objectFit='cover' className='hero-img'/>
            </div>

          <div className='spacing double'></div>
          <div className='spacing double'></div>
          <h1 className='home-welcome-h1'>Välkommen till HSB BRF<br/> Magelungen i Högdalen,<br/> Stockholm</h1>
          <div className='spacing double'></div>
          <button className='standard-button'>Läs mer om föreningen</button>
        
         </div>

         <div className='spacing double'></div>
        <h3>Snabblänkar</h3>
        <div className='spacing medium'></div>
        <div className='promo-section flex-row-space-between'>
        <Promo headline='TVÄTTSTUGA' text='Här kan du boka tvättstuga online' link='/'/>
        <Promo headline='OM FÖRENINGEN' text='Nu är det dags att nominera till styrelsen, klicka här' link='/about'/>
        <Promo headline='FÖR BOENDE' text='Såhär använder du porttelefonen i höghusen' link='/for-boende'/>
        </div>
        
        <div className='spacing double'></div>

        <div className='news-container'>
          <h3>Nyheter</h3>
          <div className='spacing medium'></div>
          <div className='news-container-grid'>
        {news.map(newsPost => {
          return <NewsPost newsPost={newsPost} />
        })}
          </div>
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