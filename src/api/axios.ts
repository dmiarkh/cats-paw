import axios from 'axios'

export default function getAxiosInstance() {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    })
}
