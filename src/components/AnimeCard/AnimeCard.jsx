import React from 'react'
import s from './AnimeCard.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/animeSlice'
import { SvgSelector } from '../UI'
import { useRouter } from 'next/router'

const AnimeCard = ({ item }) => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const handleAddToCart = item => {
    dispatch(addToCart(item))
  }
  return (
    <div className={s.card}>
      <div className={s.image_container}>
        <Image fill src={item.images.jpg.image_url} alt={'image'} />
      </div>
      <div className={s.title_container}>{item.title}</div>
      <div className={s.desc_container}>
        {item.year && <p>{item.year}</p>}
        {item.year && <p>-</p>}
        <div className={s.rating}>
          <SvgSelector id='star' />
          <p>{item.score}</p>
        </div>
      </div>
      <div className={s.btn_container}>
        <span type='button' onClick={() => handleAddToCart(item)}>
          Add to cart
        </span>
        <span type='button' onClick={() => push(`${item.mal_id}`)}>
          Details
        </span>
      </div>
    </div>
  )
}

export default AnimeCard
