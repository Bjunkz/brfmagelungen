import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '../../components/FAQ'
import { createClient } from 'contentful' 
import PageHeader from '../../components/PageHeader'

const forMembers = ({FAQS}) => {
  return (
    <>
        <Head>
        <title>För Boende</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div>
    <div className='page-hero-placeholder'></div>

      <PageHeader 
      breadcrumbs={[
        {text: 'Hem', URL: '/'},
      ]}
      title={'För boende'}
      links={[
        {linkText: 'Blanketter och dokument', URL: '/for-boende/blanketter-och-dokument'},
        {linkText: 'Föreningslokal', URL: '/for-boende/foreningslokal'},
        {linkText: 'Gästlägenhet', URL: '/for-boende/gastlagenhet'},
        {linkText: 'Gym och bastu', URL: '/for-boende/gym-och-bastu'},
      ]}
      />      

      <div className='page-intro-text'>
      <span className='bold-text'>Här finns information som rör dig som bor i föreningen.</span> Fastighetsexpeditionen ligger på Skebokvarnsvägen 265 (ingång från gatan) och är bemannad helgfria vardagar 07.00-07.30. Övriga tider kan man lämna meddelande på telefonsvararen, telefon 08-86 42 87, som avlyssnas flera gånger under dagen eller e-post till <a  className='mail-link' href = "mailto: fastighet@brfmagelungen.se">fastighet@brfmagelungen.se</a>        <br/>

      </div>

      <div className='spacing medium'></div>

      <div className='page-more-text'>
        Föreningen har två fastighetsskötare, Kjell-Åke Nilsson och Pia Johansson.
        <br/>
        <div className='spacing small'></div>
        Vid fel under kvällstid och helger kontakta alltid först Kjell-Åke Nilsson, tel 0707-14 43 92 innan ev jourmontör kontaktas.
        <br/>
        <div className='spacing small'></div>
        Akuta fel som inträffar efter ordinarie arbetstids slut samt helger som kräver omedelbara åtgärder och som inte kunnat avhjälpas genom anvisningar från Kjell-Åke anmäls till:
        JOURMONTÖR AB telefon 08-657 77 22.

      </div>
      <div className='spacing double'></div>

        <FAQ FAQ={FAQS}/>
        </div>
    </>
    
  )
}

export default forMembers;


export async function getStaticProps() {
  console.log("get static props")
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({content_type: 'faq'})
  console.log("res", res)


  return {
    props: {
      FAQS: res.items
    },
  }
}