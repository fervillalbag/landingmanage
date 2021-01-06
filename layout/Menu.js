
import Link from 'next/link'

export default function Menu({ isMenuActive }) {
   return (
      <>
         <div className="navigation-menu__overlay" aria-hidden="true"></div>
         <ul className={isMenuActive ? 'navigation-menu active' : 'navigation-menu'}>
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
      </>
   )
}
