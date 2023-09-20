import React from 'react'
import s from './AnimeCard.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/animeSlice'

const AnimeCard = ({ item }) => {
  const dispatch = useDispatch()
  const handleAddToCart = item => {
    dispatch(addToCart(item))
  }
  return (
    <div className={s.card} key={item.mal_id} onClick={handleAddToCart(item)}>
      <div className={s.image_container}>
        <Image fill src={item.images.jpg.image_url} />
      </div>
      <div className={s.title_container}>
        {item.title} / {item.title_japanese}
      </div>
    </div>
  )
}

export default AnimeCard
