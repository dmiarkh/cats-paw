import { Breed } from '../types/breeds'
import getAxiosInstance from './axios'

const axios = getAxiosInstance()

export async function getAllBreeds() {
    const breeds = await axios.get('breeds')
    return breeds.data
}

export async function getBreedsPerPage(
    order: string,
    pageNumber: number,
    limit: number,
): Promise<Breed[]> {
    const pageIndex = pageNumber - 1
    const breeds = await axios.get(
        `breeds?page=${pageIndex}&limit=${limit}&order=${order}`,
    )
    return breeds.data
}
//TODO: throw errors?
