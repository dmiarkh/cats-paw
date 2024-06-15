import {
    Link,
    LoaderFunctionArgs,
    useLoaderData,
    useSearchParams,
} from 'react-router-dom'
import { getAllBreeds, getBreedsPerPage } from '../api/breeds'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import { Breed, BreedsLoaderData } from '../types/breeds'
import SortAscIcon from '../components/icons/SortAscIcon'
import SortDescIcon from '../components/icons/SortDescIcon'

export async function loader({ request }: LoaderFunctionArgs) {
    let allBreeds: Breed[] = JSON.parse(localStorage.getItem('breeds') || '[]')

    if (allBreeds.length === 0) {
        allBreeds = await getAllBreeds()
        localStorage.setItem('breeds', JSON.stringify(allBreeds))
        //TODO: fetch all breads at the home page
    }

    const url = new URL(request.url)
    const pageNumber = Number(url.searchParams.get('page') || '0')
    const limit = Number(url.searchParams.get('limit') || '10')
    const lastPageNumber = Math.floor(allBreeds.length / limit)

    if (pageNumber > lastPageNumber || pageNumber < 0) {
        throw new Error("This page doesn't exist")
    }
    const breedsToDisplay = await getBreedsPerPage(pageNumber, limit)
    console.log(breedsToDisplay)

    return { allBreeds, breedsToDisplay, pageNumber }
}

export default function Breeds() {
    const { allBreeds, breedsToDisplay, pageNumber, lastPageNumber } =
        useLoaderData() as BreedsLoaderData

    const [searchParams, setSearchParams] = useSearchParams()

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
                    BREEDS
                </span>
            </div>
            <div className="grid auto-rows-[140px] grid-cols-3 gap-5">
                {breedsToDisplay.map((breed) => {
                    return (
                        <div
                            key={breed.id}
                            className={
                                'group relative cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n-1)]:col-span-2 [&:nth-child(10n-1)]:row-span-2 [&:nth-child(10n-2)]:row-span-2 [&:nth-child(10n-6)]:col-span-2 [&:nth-child(10n-6)]:row-span-2'
                            }
                            style={{
                                backgroundImage: `url(${breed.image.url})`,
                            }}
                        >
                            <Link to={'/'}>
                                <div className="absolute inset-0 hidden items-center justify-center rounded-2xl bg-primaryColor opacity-60 group-hover:flex"></div>
                                <span className="invisible absolute inset-x-3 bottom-3 flex h-9 items-center justify-center rounded-xl bg-white text-primaryColor opacity-100 group-hover:visible">
                                    {breed.name}
                                </span>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    className="group mr-10 flex h-10 w-32 items-center justify-center gap-3 rounded-xl bg-bgColor text-primaryColor disabled:cursor-not-allowed disabled:text-red-200"
                    onClick={() =>
                        setSearchParams((prev) => {
                            prev.set('page', String(pageNumber - 1))
                            return prev
                        })
                    }
                    disabled={pageNumber === 0}
                >
                    <BackArrowIcon
                        className={
                            'w-4 fill-primaryColor group-disabled:fill-red-200'
                        }
                    />
                    PREV
                </button>
                <button
                    className="group flex h-10 w-32 items-center justify-center gap-3 rounded-xl bg-primaryColor-light text-primaryColor disabled:cursor-not-allowed disabled:text-red-200"
                    onClick={() =>
                        setSearchParams((prev) => {
                            prev.set('page', String(pageNumber + 1))
                            return prev
                        })
                    }
                    disabled={pageNumber >= lastPageNumber}
                >
                    NEXT
                    <BackArrowIcon
                        className={
                            'w-4 rotate-180 fill-primaryColor group-disabled:fill-red-200'
                        }
                    />
                </button>
            </div>
        </div>
    )
}
