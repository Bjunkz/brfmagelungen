import { useState, useEffect } from 'react';

function getWindowDimensions() {
    if (typeof window !== "undefined") {

    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}
  }
  
  export default function useWindowDimensions() {
        // browser code
   
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
        if (typeof window !== "undefined") {

      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
  

    if (typeof window !== "undefined") {
    return windowDimensions;
    } else {
        return ''
    }
  }
  