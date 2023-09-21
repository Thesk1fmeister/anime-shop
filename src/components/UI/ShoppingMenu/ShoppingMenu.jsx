import React from 'react'
import s from './ShoppingMenu.module.scss'
import { useSelector } from 'react-redux'
import ShoppingCartItem from '../ShoppingCartItem'

const ShoppingMenu = () => {
  const shopCart = useSelector(state => state.anime.shoppingCart)
  return (
    <div className={s.container}>
      {shopCart.map(el => (
        <ShoppingCartItem item={el} />
      ))}
    </div>
  )
}

export default ShoppingMenu
