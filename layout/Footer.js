
import Link from 'next/link'
import React from 'react'

export default function Footer() {

   const handleSubmit = (e) => {
      e.preventDefault()
   }

   return (
      <footer className="footer">
         <div className="container">
            <form className="footer-form">
               <div className="footer-form__group">
                  <input type="text" className="footer-form__input" />
               </div>
               <div className="footer-form__action">
                  <button
                     className="footer-form__submit"
                     onClick={handleSubmit}
                  >
                     Go
                  </button>
               </div>
            </form>
            <div className="footer-navigation">
               <ul className="footer-navigation__menu">
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           Home
                        </a>
                     </Link>
                  </li>
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           Pricing
                        </a>
                     </Link>
                  </li>
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           Products
                        </a>
                     </Link>
                  </li>
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           About Us
                        </a>
                     </Link>
                  </li>
               </ul>
               <ul className="footer-navigation__menu">
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           Careers
                        </a>
                     </Link>
                  </li>
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           Community
                        </a>
                     </Link>
                  </li>
                  <li className="footer-navigation__item">
                     <Link href="/">
                        <a className="footer-navigation__link">
                           Privacy Policy
                        </a>
                     </Link>
                  </li>
               </ul>
            </div>
            <ul className="footer-social">
               <li className="footer-social__item">
                  <Link href="/">
                     <a className="footer-social__link">
                        <img className="footer-social__image" src="/icon-facebook.svg" alt="" />
                     </a>
                  </Link>
               </li>
               <li className="footer-social__item">
                  <Link href="/">
                     <a className="footer-social__link">
                        <img className="footer-social__image" src="/icon-youtube.svg" alt="" />
                     </a>
                  </Link>
               </li>
               <li className="footer-social__item">
                  <Link href="/">
                     <a className="footer-social__link">
                        <img className="footer-social__image" src="/icon-twitter.svg" alt="" />
                     </a>
                  </Link>
               </li>
               <li className="footer-social__item">
                  <Link href="/">
                     <a className="footer-social__link">
                        <img className="footer-social__image" src="/icon-pinterest.svg" alt="" />
                     </a>
                  </Link>
               </li>
               <li className="footer-social__item">
                  <Link href="/">
                     <a className="footer-social__link">
                        <img className="footer-social__image" src="/icon-instagram.svg" alt="" />
                     </a>
                  </Link>
               </li>
            </ul>
            <div className="footer-brand">
               <Link href="/">
                  <a className="footer-brand__link">
                     <img className="footer-brand__image" src="/logowhite.svg" alt="" />
                  </a>
               </Link>
            </div>
            <div className="footer-copy">
               <p className="footer-copy__text">
                  Copyright 2020. All Rights Reserved
               </p>
            </div>
         </div>
      </footer>
   )
}
