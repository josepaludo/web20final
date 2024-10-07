import axios from "axios"
import { Entities, Urls } from "./urls"


const apiClient = axios.create({
    baseURL: "http://localhost:8080/"
})

export class Api<Url extends Urls> {

    private url: Url

    constructor(url: Url) {
        this.url = url
    }

    public get = (
        callback?: (entities: Array<Entities[Url]>) => void,
        onError?: () => void
    ) => {
        apiClient
            .get<void, { data: Array<Entities[Url]> }>(`${this.url}`)
            .then(({ data }) => {
                callback!(data)
            })
            .catch(onError)
    }

    public create = (
        entity: Omit<Entities[Url], "id">,
        callback?: (entity: Entities[Url]) => void,
        onError?: () => void
    ) => {
        apiClient
            .post<Entities[Url], { data: Entities[Url] }>(this.url, entity)
            .then(({ data }) => {
                callback!(data)
            })
            .catch(onError)
    }

    public delete = (
        id: number,
        callback?: () => void,
        onError?: () => void
    ) => {
        apiClient
            .delete(`${this.url}/${id}`)
            .then(callback)
            .catch(onError)
    }

    public update = (
        entity: Entities[Url],
        callback?: (entity: Entities[Url]) => void,
        onError?: () => void
    ) => {
        apiClient
            .put<Entities[Url], { data: Entities[Url] }>(`${this.url}/${entity.id}`, entity)
            .then(({ data }) => {
                callback!(data)
            })
            .catch(onError)
    }

}