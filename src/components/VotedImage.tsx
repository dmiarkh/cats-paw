import LikeIcon from './icons/LikeIcon'
import FavoriteIcon from './icons/FavoriteIcon'
import DislikeIcon from './icons/DislikeIcon'

interface Props {
    imageUrl: string
    list: 'likes' | 'favorites' | 'dislikes'
    removeVote: () => void
}

export default function VotedImage({ imageUrl, list, removeVote }: Props) {
    const iconElements = {
        likes: <LikeIcon className="fill-white" />,
        favorites: <FavoriteIcon className="fill-white" />,
        dislikes: <DislikeIcon className="fill-white" />,
    }

    return (
        <div
            className={
                'group relative rounded-2xl bg-cover bg-center bg-no-repeat [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n-1)]:col-span-2 [&:nth-child(10n-1)]:row-span-2 [&:nth-child(10n-2)]:row-span-2 [&:nth-child(10n-6)]:col-span-2 [&:nth-child(10n-6)]:row-span-2'
            }
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div className="absolute inset-0 hidden items-center justify-center rounded-2xl bg-primaryColor opacity-60 group-hover:flex"></div>
            <button
                onClick={removeVote}
                className="peer absolute left-1/2 top-1/2 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-primaryColor group-hover:flex"
            >
                {iconElements[list]}
            </button>
            <div
                role="tooltip"
                className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-12 rounded-md bg-gray-800 p-1 text-center text-xs text-gray-100 peer-hover:block"
            >
                Remove from {list}
            </div>
        </div>
    )
}
