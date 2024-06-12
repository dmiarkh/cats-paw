import { Link, useLoaderData, useRevalidator } from 'react-router-dom'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import VotedImage from '../components/VotedImage'
import { getVotes, removeVote } from '../api/voting'
import { Vote } from '../types/voting'

export async function loader() {
    const votes = await getVotes()
    const dislikedImages = votes.filter((res: Vote) => res.value === -1)
    return dislikedImages
}

export default function Dislikes() {
    const dislikedImages = useLoaderData() as [Vote]
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
                    DISLIKES
                </span>
            </div>
            <div className="grid auto-rows-[140px] grid-cols-3 gap-5">
                {dislikedImages.length ? (
                    dislikedImages.map((dislikedImage) => (
                        <VotedImage
                            key={dislikedImage.id}
                            imageUrl={dislikedImage.image.url}
                            list="dislikes"
                            removeVote={async () => {
                                const response = await removeVote(
                                    dislikedImage.id,
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
