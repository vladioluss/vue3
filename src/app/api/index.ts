import axios from "axios";


const apiInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    contenttype: 'application/json',
  },
})

/** Поличение всех элементов или определенного элемента */
export function getItems(url: string, id: number|null = null) {
  return apiInstance.get(url, { data: id })
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