
import Link from 'next/link'

export default function Navbar() {
   return (
      <nav className="navigation">
         <div className="container">
            <div className="navigation-brand">
               <Link href="/">
                  <a className="navigation-brand__link">
                     <img className="navigation-brand__image" src="/logo.svg" alt="Logo de la empresa" />
                  </a>
               </Link>
            </div>

            <div className="navigation-menu__overlay" aria-hidden="true"></div>
            <ul className="navigation-menu">
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">
                        Pricing
                     </a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">
                        Product
                     </a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">
                        About Us
                     </a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">
                        Careers
                     </a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">
                        Community
                     </a>
                  </Link>
               </li>
            </ul>

            <div className="navigation-footer">
               <Link href="/">
                  <a className="navigation-footer__link">
                     Get Started
                  </a>
               </Link>
            </div>

            <div className="navigation-bars">
               <button className="navigation-bars__button">
                  <img src="/icon-hamburger.svg" alt="Menu" />
               </button>
            </div>
         </div>
      </nav>
   )
}
