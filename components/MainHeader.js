import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import {TiThMenu} from 'react-icons/ti'
import {IoMdClose} from 'react-icons/io'



export default function MainHeader () {

    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        showMenu === false ? setShowMenu(true) : setShowMenu(false)
    }

        return(<>
            <div className='header'>
                <div className='icon-and-logo'>
                <Link href='/'>
                    <Image src="/hsb-logo.png" width="100" height="70" className='hsb-logo'/>
                </Link>
                <Link href='/'>
                    <h2 className='brf-magelungen-title-logo'>BRF Magelungen <span className='mobile'>m</span></h2>
                </Link>
                </div>
                <div>
                    <nav className='nav-menu-desktop'>

                        {/* <div className='hamburger-menu-close-icon' onClick={toggleMenu}>
                         <Image src='/icons/cross-icon.svg' width={40} height={40} />
                             </div> */}
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
                    <nav className='nav-menu-mobile'>
                        {!showMenu ? <TiThMenu className="hamburger-icon" onClick={toggleMenu}/> : ''}
                        {
                            showMenu ? 
                            <div className='hamburger-menu-show' >

                            <IoMdClose className="close-menu-icon" onClick={toggleMenu}/>
                            <ul className='hamburger-menu-items'>
                            <li>
                            <Link href="/om-foreningen"><a className='hamburger-menu-item' onClick={toggleMenu}>Om föreningen</a></Link>
                            </li>
                            <li>
                            <Link href="/for-boende"><a className='hamburger-menu-item' onClick={toggleMenu}>För boende</a></Link>
                            </li>
                            <li>
                            <Link href="/magelungsnytt"><a className='hamburger-menu-item' onClick={toggleMenu}>Magelungsnytt</a></Link>
                            </li>
                            <li>
                            <Link href="/kontaklt"><a className='hamburger-menu-item' onClick={toggleMenu}>Kontakt</a></Link>    
                            </li>
                        </ul>
                        </div>
                                 : ''

                        }
          
                    </nav> 
                    </div>        
            </div>    
            </>
            )
    
}