import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MagelungsNyttPost from '../components/MagelungsnyttPost'
import { createClient } from 'contentful' 

export default function magelungsNytt(props) {
  console.log(props)
  return (
    <>
        <Head>
        <title>Magelungsnytt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div>
      <h1>Magelungsnytt</h1>
      <div className='spacing double'></div>
      <MagelungsNyttPost/>
    </div>
    </>
    
  )
}


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({content_type: 'magelungsnytt'})

  return {
    props: {
      magelungsNytt: res.items
    },
  }
}