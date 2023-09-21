import React from 'react'
import s from './ShoppingCartItem.module.scss'
import Image from 'next/image'
import SvgSelector from '../SvgSelector'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '@/redux/animeSlice'

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch()
  const handleDelete = id => {
    dispatch(deleteFromCart(id))
  }
  return (
    <div className={s.card} key={item.mal_id}>
      <div className={s.image_container}>
        <Image fill src={item.images.jpg.image_url} />
      </div>
      <div className={s.title_container}>{item.title}</div>
      <div className={s.delete_btn} onClick={() => handleDelete(item.mal_id)}>
        <SvgSelector id='delete' />
      </div>
    </div>
  )
}

export default ShoppingCartItem
