import { Breed, BreedImage } from '../types/breeds'
import getAxiosInstance from './axios'

const axios = getAxiosInstance()

export async function getAllBreeds() {
    const breeds = await axios.get('breeds')
    return breeds.data
}

export async function getBreedsList(
    pageNumber: string = '0',
    limit: string = '10',
): Promise<Breed[]> {
    const breeds = await axios.get(`breeds?page=${pageNumber}&limit=${limit}`)
    return breeds.data
}
//TODO: throw errors?

export async function getBreedImage(imgId: string): Promise<BreedImage> {
    const response = await axios.get(`images/${imgId}`)
    return response.data
}
