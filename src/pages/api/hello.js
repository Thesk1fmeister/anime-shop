import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND

export const instance = axios.create({
  baseURL,
})

export const mainApi = {
  getList(page) {
    return instance.get(`v4/anime?page=${page}`)
  },
  searchItem(title) {
    return instance.get(`v4/anime?q=title=${title}`)
  },
  getSelectedItm(id) {
    return instance.get(`v4/anime/${id}/full`)
  },
}
