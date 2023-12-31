import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

export const getAll = async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/purchase-list',
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

export const getListById = async (id?: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/purchase-list/products?id=${id}`,
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

export const getAllDeleted = async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/purchase-list/deleted',
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

export const newList = async (name?: string, color?: string, icon?: string) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/purchase-list',
    signal: AbortSignal.timeout(5000),
    data: { name, color, icon },
  }
  return requestBackend(config)
}

export const addNewProduct = async (
  purchase_list_id: string,
  name: string,
  quantity: string | number,
  category: string,
  price: string | number,
  place: string
) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/products',
    signal: AbortSignal.timeout(5000),
    data: { purchase_list_id, name, quantity, category, price, place },
  }
  return requestBackend(config)
}

export const deleteProduct = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/products?id=${id}`,
    signal: AbortSignal.timeout(5000),
  }
  return requestBackend(config)
}

export const moveToRecycleBin = async (id: string, destroy: boolean) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/purchase-list?id=${id}`,
    signal: AbortSignal.timeout(5000),
    data: {
      delete: destroy,
    },
  }

  return requestBackend(config)
}

export const sharedList = async (id: string, email: string) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/purchase-list/shared?id=${id}`,
    signal: AbortSignal.timeout(5000),
    data: {
      email,
    },
  }

  return requestBackend(config)
}

export const deleteList = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/purchase-list?id=${id}`,
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

export const leaveList = async (id: string, shared_ids: string) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/purchase-list/leave-list?id=${id}`,
    signal: AbortSignal.timeout(5000),
    data: {
      shared_ids,
    },
  }

  return requestBackend(config)
}
