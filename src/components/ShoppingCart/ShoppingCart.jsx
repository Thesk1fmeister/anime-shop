import React, { useState } from 'react'
import s from './ShoppingCart.module.scss'
import { useSelector } from 'react-redux'
import { ShoppingMenu, SvgSelector } from '../UI'

const ShoppingCart = () => {
  const shoppingCart = useSelector(state => state.anime.shoppingCart)

  const handleShowMenu = () => {
    if (shoppingCart.length > 1) {
      setShowMenu(showMenu => !showMenu)
    }
  }
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className={s.shopping_container}>
      {showMenu && <ShoppingMenu />}
      <div className={s.icon} onClick={() => handleShowMenu()}>
        <SvgSelector id='shopping' />
      </div>
    </div>
  )
}

export default ShoppingCart
