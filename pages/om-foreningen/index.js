import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import SpeedFacts from '../../components/SpeedFacts'


export default function about() {
  return (
    <>
        <Head>
        <title>Om föreningen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='page-hero-placeholder'></div>
      <PageHeader 
      breadcrumbs={[
        {text: 'Hem', URL: '/'}
      ]}
      title={'Om föreningen'}
      links={[
        {linkText: 'Föreningsdokument', URL: '/om-foreningen/foreningsdokument'}
      ]}
      />
      <div className='spacing medium'></div>

      <div className='page-intro-text'>
        <span className='bold-text'>Välkommen till Brf Magelungen</span> 
        <span> Brf Magelungen ligger i söderförorten Högdalen i Stockholm - Vantörs församling - med adresser Skebokvarnsvägen och Önskehemsgatan. Föreningen bildades 1954 och första inflyttningarna ägde rum 1956.
          </span>
      </div>

      <div className='spacing medium'></div>

      <div className='page-more-text'>
      Föreningen innehar tomträtten till, samt äger och förvaltar, byggnaderna på fastigheterna kv. Ledstången samt Skärmväggen 1 och 2. Föreningens fastigheter innehåller ca 500 lägenheter fördelade på 4 st 10-vånings höghus och 11 st 3-vånings låghus, 35 garage och ett antal lokaler inklusive 4 st tvättstugor.
      <br/>
      <div className='spacing small'></div>
      Föreningen köper tjänsten ekonomisk/administrativ förvaltning av HSB Stockholm.
      Förvaltare är David Olsson.
      <br/>
      <div className='spacing small'></div>
      Senaste stambytet skedde 2001-2003.

      </div>

      <div className='spacing double'></div>

    <SpeedFacts />

    <div className='spacing double'></div>
    </>
    
  )
}
