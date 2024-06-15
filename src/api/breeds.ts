import { Breed } from '../types/breeds'
import getAxiosInstance from './axios'

const axios = getAxiosInstance()

export async function getAllBreeds() {
    const breeds = await axios.get('breeds')
    return breeds.data
}

export async function getBreedsPerPage(
    pageNumber: number = 0,
    limit: number = 10,
): Promise<Breed[]> {
    const breeds = await axios.get(`breeds?page=${pageNumber}&limit=${limit}`)
    return breeds.data
}
//TODO: throw errors?
