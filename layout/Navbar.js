
import Link from 'next/link'
import Menu from './Menu'

export default function Navbar({ isMenuActive, handleClicMenu }) {
   return (
      <nav className="navigation">
         <div className="container">
            <div className="navigation-brand">
               <Link href="/">
                  <a className="navigation-brand__link">
                     <img
                        className="navigation-brand__image"
                        src="/logo.svg"
                        alt="Logo de la empresa"
                     />
                  </a>
               </Link>
            </div>

            <Menu isMenuActive={isMenuActive} />

            <div className="navigation-footer">
               <Link href="/">
                  <a className="navigation-footer__link">
                     Get Started
                  </a>
               </Link>
            </div>

            <div className="navigation-bars">
               <button
                  className="navigation-bars__button"
                  onClick={handleClicMenu}
               >
                  <img
                     className="navigation-bars__image"
                     src={
                        isMenuActive
                           ? "icon-close.svg"
                           : "/icon-hamburger.svg"
                     }
                     alt="Button menu"
                  />
               </button>
            </div>
         </div>
      </nav>
   )
}
