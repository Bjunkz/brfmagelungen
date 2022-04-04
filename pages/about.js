import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SpeedFacts from '../components/SpeedFacts'


export default function about() {
  return (
    <>
        <Head>
        <title>Om föreningen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className='test'><h1>Om föreningen</h1></div>

    <SpeedFacts />
    </>
    
  )
}
