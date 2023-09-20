import React from 'react'
import s from './AnimeList.module.scss'
import { useSelector } from 'react-redux'
import { AnimeCard } from '..'
import { Loader, Pagination } from '../UI'

const AnimeList = () => {
  const list = useSelector(state => state.anime.list)
  if (list.length) {
    return (
      <>
        <div className={s.wrapper}>
          <div className={s.container}>
            <div className={s.list_container}>
              {list.map(item => (
                <AnimeCard item={item} />
              ))}
            </div>
            <div className={s.pagination}>
              <Pagination />
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Loader />
      </>
    )
  }
}

export default AnimeList
