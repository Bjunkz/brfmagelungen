
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import { AiOutlineDownload } from 'react-icons/ai'


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
        </div>
        <div className='spacing medium'></div>

        <div className='blanketter-och-dokument-container'>
          <div className='blanketter-och-dokument-row flex-row-space-between'>
            <h3>Andrahandsuthyrning</h3>
            <div className='blanketter-och-dokument-right'>
              <span className='standard-text'> Vid andrahandsuthyrning behövs godkännande ifrån styrelsen. Läs mer i PDF-dokumenten nedan.</span>
              <div className='spacing medium'></div>
              <hr/>
              <div className='spacing small'></div>
                
              <a download href='/dokument/blanketter/ansokan-om-andrahandsupplatelse-bostadsratt.pdf' className='underline-text flex-row-align-center'>
                  <AiOutlineDownload className='download-icon'/>
                  <span>
                    Ansökan om andrahandsupplåtelse
                    </span>
                </a>
                <div className='spacing small'></div>
                <hr/>
                <div className='spacing small'></div>
                <a download href='/dokument/blanketter/avtal-om-andrahandsupplatelse-bostadsratt.pdf' className='underline-text flex-row-align-center'>
                  <AiOutlineDownload className='download-icon'/>
                  <span>
                    Avtal om andrahandsupplåtelse
                    </span>
                </a>
                <div className='spacing small'></div>
                <hr/>
                <div className='spacing small'></div>
                <a download href='/dokument/blanketter/principer-for-andrahandsupplatelse---for-boende.pdf' className='underline-text flex-row-align-center'>
                  <AiOutlineDownload className='download-icon'/>
                  <span>
                    Principer för andrahandsupplåtelse
                    </span>
                </a>
                <div className='spacing small'></div>
                <hr/>
                <div className='spacing small'></div>
                <a download href='/dokument/blanketter/fullmakt--vid-andrahandsupplatelse-bostadsratt.pdf' className='underline-text flex-row-align-center'>
                  <AiOutlineDownload className='download-icon'/>
                  <span>
                    Fullmakt vid andrahandsupplåtelse
                    </span>
                </a>
            </div>
          </div>
          <div className='spacing double'></div>
          <div className='blanketter-och-dokument-row flex-row-space-between'>
            <h3>Välkomstbrev</h3>
            <div className='blanketter-och-dokument-right'>
              <hr/>
              <div className='spacing small'></div>
                
              <a download href='/dokument/valkomstbrev/valkommen-2024.pdf' className='underline-text flex-row-align-center'>
                  <AiOutlineDownload className='download-icon'/>
                  <span>
                    Välkommen
                    </span>
                </a>
                <div className='spacing small'></div>
                <div className='spacing small'></div>
                <hr/>
                <div className='spacing small'></div>
               
            </div>
          </div>
        </div>
    </>
    
  )
}
