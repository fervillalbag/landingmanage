
import Link from 'next/link'
import React from 'react'

export default function Join() {
   return (
      <div>
         <section className="join">
            <div className="container">
               <div className="join__info">
                  <h3 className="join__title">Simplify how your team works today.</h3>
               </div>
               <div className="join__action">
                  <Link href="/">
                     <a className="join__link">
                        Get Started
                  </a>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   )
}
