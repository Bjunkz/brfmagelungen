import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='test'>brf magelungen</div>
    
  )
}

var contentful = require('contentful');

var client = contentful.createClient({
  space: 'bbnwmy46z4ku',
  accessToken: 'uCVPokgGtO-kV2BDByUyicv9afdIvEH9X_lnqOtSt-M',
});

let nyhet = {}

client.getEntry('6SS9tqw5qZJ7viCvsY1RpB').then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys);

  // logs the field with ID title
  console.log(entry.fields);
  nyhet = entry.fields[1]

  console.log(nyhet)
});
