import { AxiosInstance } from "axios"

export const NoticiasServices = (api: AxiosInstance)=>{
    return {
        get: () => api.get('/noticias'),
        find: (noticia_id: number) => api.get('/noticias/find', {noticia_id})
    }
}