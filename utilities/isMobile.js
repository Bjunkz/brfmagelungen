import * as Parser from 'ua-parser-js'

export default function isMobile(req) {
    console.log("req", req)
    console.log("tjenare")
 if(req){
     userAgent =  Parser(req.headers['user-agent'] || '')
 } else {
     userAgent = new Parser().getResult();
 }

 console.log("userAgent", userAgent)
 return userAgent?.device?.type === 'mobile'
}