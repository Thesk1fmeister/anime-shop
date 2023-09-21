import { getList } from '@/redux/animeSlice'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Pagination.module.scss'
import SvgSelector from '../SvgSelector'

const Pagination = () => {
  const dispatch = useDispatch()
  const pagination = useSelector(state => state.anime.pagination)
  const [page, setPage] = useState(pagination.current_page)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    setPage(pagination.current_page)
    setTotalPages(pagination.last_visible_page)
  }, [pagination])

  const handlePageChange = newPage => {
    dispatch(getList(newPage))
  }

  return (
    <div className={s.pagination}>
      <div onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        <SvgSelector id='arrow' />
      </div>
      <span className={s.current_page}>
        Page {page} of {totalPages}
      </span>
      <div className={s.right_arrow} onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        <SvgSelector id='arrow' />
      </div>
    </div>
  )
}

export default Pagination
