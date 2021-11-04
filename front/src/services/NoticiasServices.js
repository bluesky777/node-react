import { AxiosInstance } from "axios"

export const NoticiasServices = (api: AxiosInstance) => {
    return {
        create: () => api.get(`/noticias/create`),
        get: (query, page, limit) => api.get(`/noticias?query=${query}&page=${page}&limit=${limit}`),
        find: (noticia_id: number) => api.get('/noticias/find', { noticia_id }),
        remove: () => api.get('/noticias/remove'),
    }
}