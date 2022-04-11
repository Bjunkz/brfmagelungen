
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'


export default function formsAndDocuments() {
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
        title={'Blanketter och dokument'}
        />  
          <a download href='/dokument/blanketter/ansokan-om-andrahandsupplatelse-bostadsratt.pdf'>pdf test</a>
        </div>
        <div className='spacing double'></div>

        <div className='blanketter-och-dokument-container'>
          <div className='blanketter-och-dokument-row flex-row'>
            <div className='blanketter-och-dokument-category'>Renovering</div>
          </div>
        </div>
    </>
    
  )
}
