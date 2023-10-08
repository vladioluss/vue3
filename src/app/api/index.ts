import axios from "axios";


const apiInstance = axios.create({
  // baseURL: 'https://rickandmortyapi.com/api/',
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  }
})

/** Получение всех элементов или определенного элемента */
export function getItems(url: string, id: number|null = null) {
  return apiInstance.get(url, {data: id})
}

export function createItem(url: string, payLoad: object) {
  return apiInstance.post(url, payLoad)
}

export function updItem(url: string, payLoad: object) {
  return apiInstance.put(url, payLoad)
}

export function delItem(url: string, id: number) {
  return apiInstance.delete(url, { data: id })
}