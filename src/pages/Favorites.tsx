import { Link, useLoaderData, useRevalidator } from 'react-router-dom'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import VotedImage from '../components/VotedImage'
import { getFavorites, removeFavorite } from '../api/voting'
import { Vote } from '../types/vote'

export async function loader() {
    return await getFavorites()
}

export default function Favorites() {
    const favoriteImages = useLoaderData() as [Vote]
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
                    FAVORITES
                </span>
            </div>
            <div className="grid auto-rows-[140px] grid-cols-3 gap-5">
                {favoriteImages.length ? (
                    favoriteImages.map((favoriteImage) => (
                        <VotedImage
                            key={favoriteImage.id}
                            imageUrl={favoriteImage.image.url}
                            list="favorites"
                            removeVote={async () => {
                                const response = await removeFavorite(
                                    favoriteImage.id,
                                )
                                if (response.status === 200) {
                                    revalidator.revalidate()
                                }
                            }}
                        />
                    ))
                ) : (
                    <p className="col-span-3 mt-10 text-center">
                        No items found.
                    </p>
                )}
            </div>
        </div>
    )
}
