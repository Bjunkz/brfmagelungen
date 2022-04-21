BRF Magelungen

This is a website for the bostadsrättsförening Brf Magelungen located in Högdalen, Stockholm.

It is built with NextJS and fetches data from Contentful.

The website consists of a home page then four pages with additional subpages. The website uses components that are re-used in several places, such as "PageHeader.js"

The structure is:

*Home (index)
*Om föreningen
 index
 föreningsdokument
*För boende
  index
  blanketter och dokument
  föreningslokal
  gästlägenhet
  gym och bastu
*Magelungsnytt
*Kontakt

To start a local develop environment use:

npm install

npm run dev

This will start a server on localhost:3000

The project is deployed on netlify and uses the main -branch as CI. 