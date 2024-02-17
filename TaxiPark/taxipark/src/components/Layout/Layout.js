import React from 'react'
import Header1 from './Header1'


const Layout = ({ children }) => {
  return (
    <>
      <Header1 />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
