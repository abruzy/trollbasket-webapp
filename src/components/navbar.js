import React from 'react'
import { NavLink } from 'react-router-dom'

import HomeIcon from '../vectors/HomeIcon'
import BuyIcon from '../vectors/BuyIcon'
import DealsIcon from '../vectors/DealsIcon'
import WalletIcon from '../vectors/WalletIcon'
import MoreIcon from '../vectors/MoreIcon'
import {
  BUY_ROUTE,
  HOME_ROUTE,
  DEALS_ROUTE,
  WALLET_ROUTE,
  MORE_ROUTE
} from '../utils/routes'

const navLinks = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: 'Home',
    path: HOME_ROUTE
  },
  {
    id: 2,
    icon: <BuyIcon />,
    text: 'Buy',
    path: BUY_ROUTE
  },
  {
    id: 3,
    icon: <DealsIcon />,
    text: 'Deals',
    path: DEALS_ROUTE
  },
  {
    id: 4,
    icon: <WalletIcon />,
    text: 'Wallet',
    path: WALLET_ROUTE
  },
  {
    id: 5,
    icon: <MoreIcon />,
    text: 'More',
    path: MORE_ROUTE
  }
]

const NavBar = () => {
  return (
    <nav className='sm:hidden fixed bottom-0 w-full bg-white h-24 flex items-center justify-between px-5 box'>
      {navLinks.map(({ id, icon, text, path }) => (
        <NavLink key={id} to={path} className='flex flex-col items-center'>
          {icon}
          <p className='mt-2 text-gray2 text-sm font-normal'>{text}</p>
        </NavLink>
      ))}
    </nav>
  )
}

export default NavBar
