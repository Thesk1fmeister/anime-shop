import React from 'react'
import s from './ShoppingCart.module.scss'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const basket = useSelector(state => state.anime.shopCart)
  return <div className={s.wrapper}>{basket?.length ? <p>{basket[0].title}</p> : <p>0</p>}</div>
}

export default ShoppingCart
