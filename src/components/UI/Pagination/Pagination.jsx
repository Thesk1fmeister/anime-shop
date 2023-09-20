import { getList } from '@/redux/animeSlice'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

//   const renderPaginationButtons = () => {
//     const buttons = []
//     for (let i = 1; i <= totalPages; i++) {
//       buttons.push(
//         <button key={i} onClick={() => handlePageChange(i)} className={i === page ? 'active' : ''}>
//           {i}
//         </button>
//       )
//     }
//     return buttons
//   }

  return (
    <div className='pagination'>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Попередня
      </button>
      <span className='current-page'>
        Сторінка {page} з {totalPages}
      </span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Наступна
      </button>
    </div>
  )
}

export default Pagination
