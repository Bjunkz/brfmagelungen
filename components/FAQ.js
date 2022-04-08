import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus} from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'

const FAQ = (props) =>{

const [clicked, setClicked] = useState(false)

const toggle = (index) =>{
    if(clicked === index){
        return setClicked(null)
    }
    setClicked(index)
}
    return(
    <>
    <div>
        <h3>Vanliga frågor</h3>
        <div className='FAQ-container'>
        {props.FAQ.map((item, index) => {
            return(
                <div>
                    <div onClick={() => toggle(index)} key={index}>
                    <div className='flex-row-space-between'>
                       <div className='FAQ-question'> {item.fields.question}</div>
                        <span> {clicked===index ? <FiMinus/> : <FiPlus/>} </span>
                    </div>
                    {clicked === index ? (
                    <div className='FAQ-transition'>
                        <ReactMarkdown>
                        {item.fields.answer}
                            </ReactMarkdown> </div>) 
                    : null}
                    </div>
                    <hr/>
                    
                    </div>

            )
        })}

        </div>
    </div>
    </>
    )
}

export default FAQ