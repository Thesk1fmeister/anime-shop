import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND

export const instance = axios.create({
  baseURL,
})


export const mainApi = {

}