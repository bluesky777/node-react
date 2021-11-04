import { AxiosInstance } from "axios"

export const NoticiasServices = (api: AxiosInstance)=>{
    return {
        get: (query, offset, limit) => api.get(`/noticias?query=${query}&offset=${offset}&limit=${limit}`),
        find: (noticia_id: number) => api.get('/noticias/find', {noticia_id})
    }
}