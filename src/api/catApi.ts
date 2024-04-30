import { CatData } from '../types/cats'
import { Vote } from '../types/vote'
import getAxiosInstance from './axios'

const axios = getAxiosInstance()

export async function getRandomImage(): Promise<CatData> {
    const response = await axios.get('images/search')
    return response.data[0]
}

export async function getVotes(): Promise<[Vote]> {
    const response = await axios.get('votes?order=DESC', {
        headers: {
            'x-api-key': import.meta.env.VITE_API_KEY,
        },
    })
    return response.data
}

export async function vote(imgId: string, action: 'like' | 'dislike') {
    const response = await axios.post(
        'votes',
        { image_id: imgId, value: action === 'like' ? 1 : -1 },
        { headers: { 'x-api-key': import.meta.env.VITE_API_KEY } },
    )
    console.log(response)
}

export async function removeVote(imgId: string) {
    return await axios.delete(`votes/${imgId}`, {
        headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    })
}

export async function getFavorites() {
    const response = await axios.get('favourites?order=DESC', {
        headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    })
    return response.data
}

export async function setFavorite(imgId: string) {
    const response = await axios.post(
        'favourites',
        { image_id: imgId },
        { headers: { 'x-api-key': import.meta.env.VITE_API_KEY } },
    )
    console.log(response)
}

export async function removeFavorite(imgId: string) {
    return await axios.delete(`favourites/${imgId}`, {
        headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    })
}
