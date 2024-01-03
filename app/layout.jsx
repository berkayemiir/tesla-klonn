import React from 'react'
import Header from './components/Header'


import "./globals.css"


const layout = ({children}) => {
  return (
    <html lang='en'>
    <body className="">
            <Header />
                {children}
          
          
                
          
    </body>
</html>
  )
}

export default layout
