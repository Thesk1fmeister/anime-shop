import React from 'react'
import s from './SearchField.module.scss'
import { DebounceInput } from 'react-debounce-input'
import { useDispatch } from 'react-redux'
import { searchItem } from '@/redux/animeSlice'

const SearchField = () => {
  const dispatch = useDispatch()
  const handleSearch = e => {
    dispatch(searchItem(e.target.value))
  }
  return (
    <div>
      <DebounceInput minLength={2} debounceTimeout={150} onChange={e => handleSearch(e)} />
    </div>
  )
}

export default SearchField
