import React from 'react'
import Head from 'next/head'
import NavBar from '../NavBar'
import Footer from '../Footer'

const MainLayout = ({children}) => {
  return (
    <div>
    <Head>
      <title>Abalvi</title>
      <meta name="description" content="Home"/>
    </Head>
    <NavBar />
    <main>
      {children}
    </main>
    <Footer />
    </div>
  )
}

export default MainLayout