import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'


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
          {title: 'Om föreningen', URL: '/om-foreningen'}
      ]}
      title={'Föreningsdokument'}
      />

    </>
    
  )
}
