
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import {BiInfoCircle} from 'react-icons/bi'



export default function foreningslokal() {
  return (
    <>
        <Head>
        <title>För Boende</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div>
      <div className='page-no-hero-placeholder'></div>

      <PageHeader 
        breadcrumbs={[
          {text: 'Hem', URL: '/'},
          {text: 'För boende', URL:'/for-boende'}
        ]}
        title={'Föreningslokal'}
        />  
      </div>
      <div className='page-intro-text'>
          <span className='bold-text'>Vår omtyckta föreningslokal</span> ligger på Skebokvarnsvägen 265 (vid fastighetskontoret). Lokalen rymmer upp till 50 personer och är utrustad med kök som har spis med ugn, diskmaskin, kaffebryggare, bestick, glas och porslin. Det finns även bord och stolar samt en TV.<br/>
      </div>
      <div className='spacing double'></div>
      <h2>Boka föreningslokalen</h2>
      <div className='spacing medium'></div>
      <div className='standard-text'>Som medlem kan du boka möteslokalen. Nedan gäller för bokning</div>
      <div className='spacing medium'></div>
      <div className='important-box'>
        <div className='important-info-text-container'>
        <div className='info-icon-container'>
          <BiInfoCircle className='info-icon'/>
        </div>
        <div>
          <div className='standard-text'><span className='bold-text'>Betalning</span> via inbetalningskort som erhålls vid bokning</div>
          <div className='spacing micro'></div>
          <div className='standard-text'><span className='bold-text'>Kostnad</span> är 300 kr per tillfälle</div>
          <div className='spacing micro'></div>
          <div className='standard-text'><span className='bold-text'>Deposition</span> på 500 kr betalas kontant och återfås efter syn av lokalen. Avdrag görs om lokalen är dåligt städad, vid klagomål av grannar etc.</div>
          <div className='spacing micro'></div>
          <div className='standard-text'><span className='bold-text'>Bokning</span> sker via <Link href='kontakt'><a className='underline-text'>fastighetsexpeditionen</a></Link>.</div>

        </div>

        </div>
      </div>

      
    </>
    
  )
}
