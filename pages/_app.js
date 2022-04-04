import '../styles/globals.css'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function MyApp({ Component, pageProps }) {

  return(
      <>
      <div className='flex-row'>   
       <Header />
       <div>
        <Component {...pageProps} />
        <Footer/>
       </div>


      </div>

      </>
  )
}

export default MyApp