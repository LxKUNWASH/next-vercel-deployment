import Styles from "./Navbar.module.css"
import { ActiveLink } from './ActiveLink'
import { FC } from 'react';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const Navbar : FC = () => {
  return (
   <nav className={Styles["menu-container"]}>
    {menuItems.map((mI)=>{
      return <ActiveLink key={mI.text} text={mI.text} href={mI.href} />
    })}
     
   </nav>
  )
}
