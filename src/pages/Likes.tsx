import { Link, useLoaderData, useRevalidator } from 'react-router-dom'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import { Vote } from '../types/vote'
import VotedImage from '../components/VotedImage'
import { getVotes, removeVote } from '../api/voting'

export async function loader() {
    const votes = await getVotes()
    const likedImages = votes.filter((res: Vote) => res.value === 1)
    return likedImages
}

export default function Likes() {
    const likedImages = useLoaderData() as [Vote]
    const revalidator = useRevalidator()

    //TODO: pagination
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
                                const response = await removeVote(likedImage.id)
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
