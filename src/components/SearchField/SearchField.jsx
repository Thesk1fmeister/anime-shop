import React, { useState } from 'react'
import s from './SearchField.module.scss'
import { DebounceInput } from 'react-debounce-input'
import { useDispatch, useSelector } from 'react-redux'
import { getList, searchItem } from '@/redux/animeSlice'
import { ShoppingMenu, SvgSelector } from '../UI'

const SearchField = () => {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false)
  const pagination = useSelector(state => state.anime.pagination)
  const handleSearch = e => {
    dispatch(searchItem(e.target.value))
  }
  const handleReset = e => {
    if (e.target.value === '') {
      dispatch(getList(pagination.current_page))
    }
  }


  return (
    <>
      <div className={s.wrapper}>
        <div className={s.input_container}>
          <DebounceInput
            minLength={1}
            debounceTimeout={150}
            onChange={e => handleSearch(e)}
            placeholder={'Enter anime name'}
            onBlur={e => handleReset(e)}
          />
        </div>
        
      </div>
    </>
  )
}

export default SearchField
