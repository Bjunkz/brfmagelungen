import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '../../components/FAQ'
import { createClient } from 'contentful' 

const forMembers = ({FAQS}) => {
  return (
    <>
        <Head>
        <title>För Boende</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div>
        <h1>För Boende</h1>
        <div>
          Här hittar du information till dig som bor i föreningen. nånting nånting osv

          <ul>
            <li>
            <Link href="/for-boende/formsAndDocuments" as="/for-boende/blanketter-och-dokument">Blanketter och dokument</Link>
            </li>
            <li>
            <Link href="/for-boende/foreningslokal">Föreningslokal</Link>

            </li>
            <li>
            <Link href="/for-boende/gymAndSauna" as="/for-boende/gym-och-bastu">Gym och bastu</Link>

            </li>
            <li>
            <Link href="/for-boende/guestApartment">Kontakt</Link>
            </li>
          </ul>

        </div>

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