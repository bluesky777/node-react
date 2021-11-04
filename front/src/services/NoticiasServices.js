import { AxiosInstance } from "axios"

export const NoticiasServices = (api: AxiosInstance)=>{
    return {
        get: () => api.put('/noticias'),
        find: (noticia_id: number) => api.put('/noticias/find', {noticia_id})
    }
}