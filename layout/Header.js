
import React from 'react'

export default function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__media">
               <img className="header__image" src="/illustration-intro.svg" alt="Header Image" />
            </div>
            <div className="header__info">
               <h2 className="header__title">Bring everyone together to build better products.</h2>
               <p className="header__description description">
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
            </p>
            </div>
         </div>
      </header>
   )
}
