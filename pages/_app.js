import '../styles/globals.css'
import MainHeader from '../components/MainHeader.js'
import Footer from '../components/Footer.js'

function MyApp({ Component, pageProps }) {

  return(
      <>
      <div className='flex-row'>   
       <MainHeader />
       <div className='main-container'>
        <Component {...pageProps} />
        <Footer/>
       </div>


      </div>

      </>
  )
}

export default MyApp