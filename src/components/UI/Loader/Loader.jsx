import React from 'react'
import s from './Loader.module.scss'
import SvgSelector from '../SvgSelector'

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.circle}>
        <SvgSelector id='loader' />
      </div>
      <div className={s.text}>Loading...</div>
    </div>
  )
}

export default Loader
