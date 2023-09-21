import React, { useEffect } from 'react'
import s from './SelectedAnime.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getSelectedItem } from '@/redux/animeSlice'
import Image from 'next/image'
import { Loader, SvgSelector } from '@/components/UI'

const SelectedAnimePage = () => {
  const { query, push } = useRouter()
  const dispatch = useDispatch()
  const selectedItem = useSelector(state => state.anime.selectedItem)

  useEffect(() => {
    dispatch(getSelectedItem(query.id))
  }, [])

  if (selectedItem) {
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.back_btn} onClick={() => push('/')}>
            Back to list
          </div>
          <div className={s.title_container}>
            <p className={s.title}>
              {selectedItem.title} / {selectedItem.title_japanese}
            </p>
          </div>
          <div className={s.content_container}>
            <div className={s.image_container}>
              <Image fill src={selectedItem.images?.jpg.large_image_url} alt='image' />
            </div>
            <div className={s.description_container}>
              <div className={s.text}>Type: {selectedItem.type}</div>
              <div className={s.text}>Episodes: {selectedItem.episodes}</div>
              <div className={s.text}>Status: {selectedItem.status}</div>
              <div className={s.text}>Duration: {selectedItem.duration}</div>
              <div className={s.rating_container}>
                Rating:
                <div className={s.rating}>
                  <SvgSelector id='star' />
                  <p>{selectedItem.score}</p>
                </div>
              </div>
              <div className={s.genre}>Release date: {selectedItem.year}</div>
              <div className={s.producers}>
                Producers:
                {selectedItem.producers.map(el => (
                  <p className={s.producer_name}>{el.name}</p>
                ))}
              </div>
              <div className={s.genre_container}>
                {selectedItem.genres.map(el => (
                  <p className={s.genre}>{el.name}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={s.synopsis}>{selectedItem.synopsis}</div>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <Loader />
      </>
    )
  }
}

export default SelectedAnimePage
