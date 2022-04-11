import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';

export default function MainHeader () {
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        showMenu === false ? setShowMenu(true) : setShowMenu(false)
    }

    return(<>
    <div className='header'>
        <div>
        <Link href='/'>
            <Image src="/hsb-logo.png" width="100" height="70" className='hsb-logo'/>
        </Link>
        <Link href='/'>
            <h2 className='brf-magelungen-title-logo'>BRF MAGELUNGEN</h2>
        </Link>
        </div>


        {/* <div className='hamburger-icon' onClick={toggleMenu}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="60" width="100" height="20" rx="8"></rect>
                </svg>  
        </div> */}
            <div>




            {   showMenu ?   
            <nav className='hamburger-menu-show'>
                <div className='hamburger-menu-close-icon' onClick={toggleMenu}>
                 {/* <Image src='/icons/cross-icon.svg' width={40} height={40} /> */}
                     </div>
                    <ul className='hamburger-menu-items'>
                        <li>
                        <Link href="/om-foreningen"><a className='hamburger-menu-item'>Om föreningen</a></Link>
                        </li>
                        <li>
                        <Link href="/for-boende"><a className='hamburger-menu-item'>För boende</a></Link>
                        </li>
                        <li>
                        <Link href="/magelungsnytt"><a className='hamburger-menu-item'>Magelungsnytt</a></Link>
                        </li>
                        <li>
                        <Link href="/kontaklt"><a className='hamburger-menu-item'>Kontakt</a></Link>    
                        </li>
                    </ul>
            </nav> 
                : ''}
            </div>

            <div>logga in</div>

    </div>
    
    </>
    )
}