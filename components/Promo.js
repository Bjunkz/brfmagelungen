import Link from 'next/link'
import Image from 'next/image'
import {FaArrowRight} from 'react-icons/fa'

export default function Promo (promo) {
    return(
        <>
        <Link href={promo.link}>
        <div className='promo-container flex-column-space-between standard-padding'>
            <div className='flex-row-space-between promo-top-row'>
                <h3 className='promo-headline'>{promo.headline}</h3>
                <FaArrowRight className='arrow-right'/>
             </div>
            <p className='standard-text promo-desktop-text'>{promo.text}</p>
        </div>
        </Link>
        
        </>
    )
}