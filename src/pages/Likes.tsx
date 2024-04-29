import { Link, useLoaderData, useRevalidator } from 'react-router-dom'
import getAxiosInstance from '../api/axios'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import { Votes } from '../types/votes'
import VotedImage from '../components/VotedImage'

export async function loader() {
    const axiosInstance = getAxiosInstance()
    const response = await axiosInstance.get('votes?order=DESC', {
        headers: {
            'x-api-key': import.meta.env.VITE_API_KEY,
        },
    })
    const likesData: [Votes] = response.data.filter(
        (res: Votes) => res.value === 1,
    )
    return likesData
}

async function removeVote(imgId: string) {
    const axios = getAxiosInstance()
    return await axios.delete(`votes/${imgId}`, {
        headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    })
}

export default function Likes() {
    const likedImages = useLoaderData() as [Votes]
    const revalidator = useRevalidator()

    return (
        <div className="mb-4 rounded-2xl bg-white p-5">
            <div className="mb-5 flex gap-3">
                <Link
                    to={'/'}
                    role="button"
                    className="group flex size-10 items-center justify-center rounded-xl bg-primaryColor-light hover:bg-primaryColor"
                >
                    <BackArrowIcon className="fill-primaryColor group-hover:fill-white" />
                </Link>
                <span className="flex h-10 items-center justify-center rounded-xl bg-primaryColor px-7 text-lg font-medium leading-none tracking-wider text-white">
                    LIKES
                </span>
            </div>
            <div className="grid auto-rows-[140px] grid-cols-3 gap-5">
                {likedImages.length ? (
                    likedImages.map((likedImage) => (
                        <VotedImage
                            key={likedImage.id}
                            imageUrl={likedImage.image.url}
                            list="likes"
                            removeVote={async () => {
                                //TODO: optimistic update
                                const responce = await removeVote(likedImage.id)
                                console.log(responce)
                                revalidator.revalidate()
                            }}
                        />
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    )
}
