import MainHeader from './MainHeader'
import Footer from './Footer'


const Layout = ({children}) => {
    return(
        <div className='main-layout'>   
            <MainHeader/>
            <div className='main-container'>
                {children}
                <Footer/>
            </div>

        </div>
 
 
    )
}

export default Layout

export async function getServerSideProps({req}){
    return {
        props: {
            isMobile: isMobile(req)
        }
    }
}