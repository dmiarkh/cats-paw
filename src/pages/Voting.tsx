import { Link, useLoaderData } from 'react-router-dom'
import backArrowIcon from '../assets/images/backArrow.svg'
import likeIcon from '../assets/images/like.svg'
import favoriteIcon from '../assets/images/fav_empty.svg'
import dislikeIcon from '../assets/images/dislike.svg'
import LogCard from '../components/LogCard'

interface catData {
    id: string
    url: string
    height: number
    width: number
}

export async function loader() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const data: [catData] = await response.json()
    return data[0]
}

export default function Voting() {
    const catData = useLoaderData() as catData

    return (
        <div className="flex flex-col items-center gap-5 overflow-y-auto rounded-2xl bg-white p-6">
            <div className="flex gap-3 self-start">
                <Link
                    to={'/'}
                    role="button"
                    className="flex size-10 items-center justify-center rounded-xl bg-primaryColor-light hover:bg-primaryColor"
                >
                    <img src={backArrowIcon} />
                </Link>
                <span className="flex h-10 items-center justify-center rounded-xl bg-primaryColor px-7 text-lg font-medium leading-none tracking-wider text-white">
                    VOTING
                </span>
            </div>
            <div className="max-h-screen min-h-min w-full overflow-y-auto px-4">
                <div className="relative">
                    <img
                        src={catData.url}
                        width={catData.width}
                        height={catData.height}
                        alt="cat photo"
                        className="mx-auto rounded-2xl"
                    />
                    <div className="absolute inset-x-0 bottom-0 mx-auto flex w-fit translate-y-1/2 gap-1 rounded-xl bg-white ring-4 ring-white">
                        <button className="flex size-14 items-center justify-center rounded-s-xl bg-likeColor hover:bg-opacity-70">
                            <img src={likeIcon} />
                        </button>
                        <button className="flex size-14 items-center justify-center bg-favoriteColor  hover:bg-opacity-70">
                            <img src={favoriteIcon} />
                        </button>
                        <button className="flex size-14 items-center justify-center rounded-e-xl bg-dislikeColor hover:bg-opacity-70">
                            <img src={dislikeIcon} />
                        </button>
                    </div>
                </div>
                <div className="mt-14 flex flex-col gap-3">
                    <LogCard />
                    <LogCard />
                    <LogCard />
                </div>
            </div>
        </div>
    )
}
