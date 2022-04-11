import Link from 'next/link'
import Image from 'next/image'

export default function speedFacts () {
    return(<>
    <div className='speedFacts-main-container flex-row-space-between'>
        <h3>Snabbfakta</h3>

        <div className='speedFacts-container'>
        { facts.map(fact => {

         return(
            <div className='speedFacts-row'>
                <hr></hr>
                <div className='speedFacts-row-content'>
                    <div className='speedFacts-fact'>{fact.type}</div>
                    <div className='speedFacts-answer'>{fact.fact}</div>
                </div>
            </div>
            )}
        )}
            <hr></hr>
        </div>

    </div>
    
    </>
    )
}

const facts = [
    {type: "Byggår", fact: "1956" },
    {type: "Antal lägenheter", fact: "501" },
    {type: "Parkeringsplatser", fact: "120 st" },
    {type: "Garage", fact: "35 st" },
    {type: "Stambytt", fact: "2001-2003" },
    {type: "Gym/bastu", fact: "ja" },
    {type: "Gästlägenhet", fact: "Ja, med fyra sovplatser" }
]