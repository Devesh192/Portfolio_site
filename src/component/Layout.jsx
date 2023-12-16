import React from 'react'
import Header from './navbar'
import Footer from './footer'

function Layout({children}) {
  return (
    // <div className='w-screen'>
    //     <Header />
    //       <div> {children}</div>
    //       <div><Footer />  </div> 
    // </div>
      <div className='flex flex-col min-h-screen'>
          <Header />
          <div className='flex-1'>
              {children}
          </div>
          <Footer />
      </div>
  )
}

export default Layout