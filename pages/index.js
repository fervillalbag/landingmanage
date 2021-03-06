
import Head from 'next/head'
import { useState } from 'react'

import Navbar from '../layout/Navbar'
import About from '../layout/About'
import Header from '../layout/Header'
import Testimonials from '../layout/Testimonials'
import Join from '../layout/Join'
import Footer from '../layout/Footer'

export default function Home() {

   const [isMenuActive, setIsMenuActive] = useState(false)

   const handleClicMenu = () => {
      setIsMenuActive(!isMenuActive)
   }

   return (
      <>
         <Head>
            <title>Frontend Mentor | Manage Landing Page</title>
            <link rel="icon" href="/favicon.png" />
            <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
         </Head>

         <Navbar
            isMenuActive={isMenuActive}
            handleClicMenu={handleClicMenu}
         />
         <Header />
         <About />
         <Testimonials />
         <Join />
         <Footer />
      </>
   )
}
