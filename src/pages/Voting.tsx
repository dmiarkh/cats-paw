import { Link, useLoaderData, useRevalidator } from 'react-router-dom'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import LikeIcon from '../components/icons/LikeIcon'
import FavoriteIcon from '../components/icons/FavoriteIcon'
import DislikeIcon from '../components/icons/DislikeIcon'
import LogCard from '../components/LogCard'
import { RandomCat } from '../types/voting'
import { getRandomImage, setFavorite, vote } from '../api/voting'

export async function loader() {
    return await getRandomImage()
}
//TODO: action?

export default function Voting() {
    const randomCat = useLoaderData() as RandomCat
    const revalidator = useRevalidator()

    return (
        <div className="mb-4 flex flex-col items-center gap-5 rounded-2xl bg-white p-6">
            <div className="flex gap-3 self-start">
                <Link
                    to={'/'}
                    role="button"
                    className="group flex size-10 items-center justify-center rounded-xl bg-primaryColor-light hover:bg-primaryColor"
                >
                    <BackArrowIcon className="fill-primaryColor group-hover:fill-white" />
                </Link>
                <span className="flex h-10 items-center justify-center rounded-xl bg-primaryColor px-7 text-lg font-medium leading-none tracking-wider text-white">
                    VOTING
                </span>
            </div>
            <div className="w-full px-4">
                <div className="relative">
                    <img
                        src={randomCat.url}
                        width={randomCat.width}
                        height={randomCat.height}
                        alt="cat photo"
                        className="mx-auto rounded-2xl"
                    />
                    <div className="absolute inset-x-0 bottom-0 mx-auto flex w-fit translate-y-1/2 gap-1 rounded-xl bg-white ring-4 ring-white">
                        <button
                            onClick={() => {
                                vote(randomCat.id, 'like')
                                revalidator.revalidate()
                            }}
                            className="flex size-14 items-center justify-center rounded-s-xl bg-likeColor hover:bg-opacity-60"
                        >
                            <LikeIcon className="fill-white" />
                        </button>
                        <button
                            onClick={() => {
                                setFavorite(randomCat.id)
                                revalidator.revalidate()
                            }}
                            className="flex size-14 items-center justify-center bg-favoriteColor  hover:bg-opacity-60"
                        >
                            <FavoriteIcon className="fill-white" />
                        </button>
                        <button
                            onClick={() => {
                                vote(randomCat.id, 'dislike')
                                revalidator.revalidate()
                            }}
                            className="flex size-14 items-center justify-center rounded-e-xl bg-dislikeColor hover:bg-opacity-60"
                        >
                            <DislikeIcon className="fill-white" />
                        </button>
                    </div>
                </div>
                <div className="mt-12 flex flex-col gap-2">
                    <LogCard />
                    <LogCard />
                    <LogCard />
                </div>
            </div>
        </div>
    )
}
