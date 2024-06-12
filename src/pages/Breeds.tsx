import {
    Link,
    LoaderFunctionArgs,
    useLoaderData,
    useSearchParams,
} from 'react-router-dom'
import { getAllBreeds, getBreedImage, getBreedsList } from '../api/breeds'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import { Breed, BreedImage } from '../types/breeds'

export async function loader({ request }: LoaderFunctionArgs) {
    let allBreeds: Breed[] = JSON.parse(localStorage.getItem('breeds') || '[]')

    if (allBreeds.length === 0) {
        allBreeds = await getAllBreeds()
        localStorage.setItem('breeds', JSON.stringify(allBreeds))
        //TODO: fetch all breads at the home page
    }

    const url = new URL(request.url)
    const pageNumber = url.searchParams.get('page') || '0'
    const limit = url.searchParams.get('limit') || '10'
    const lastPageNumber = Math.floor(allBreeds.length / +limit)

    if (+pageNumber > lastPageNumber) {
        throw new Error('Page not found')
    }
    console.log(lastPageNumber)
    const breedsToDisplay = await getBreedsList(pageNumber, limit)

    const breedImagePromises: Promise<BreedImage>[] = []
    for (const breed of breedsToDisplay) {
        if (breed.reference_image_id) {
            breedImagePromises.push(getBreedImage(breed.reference_image_id))
        }
    }

    return {
        breedImages: await Promise.all(breedImagePromises),
        isLastPage: +limit * (+pageNumber + 1) > allBreeds.length,
    }
}

export default function Breeds() {
    const { breedImages, isLastPage } = useLoaderData() as {
        breedImages: BreedImage[]
        isLastPage: boolean
    }
    const [searchParams, setSearchParams] = useSearchParams()
    const pageNumber = Number(searchParams.get('page') || '0')

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
                {breedImages.map((breed) => {
                    return (
                        <div
                            key={breed.id}
                            className={
                                'group relative cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n-1)]:col-span-2 [&:nth-child(10n-1)]:row-span-2 [&:nth-child(10n-2)]:row-span-2 [&:nth-child(10n-6)]:col-span-2 [&:nth-child(10n-6)]:row-span-2'
                            }
                            style={{
                                backgroundImage: `url(${breed.url})`,
                            }}
                        >
                            <Link to={'/'}>
                                <div className="absolute inset-0 hidden items-center justify-center rounded-2xl bg-primaryColor opacity-60 group-hover:flex"></div>
                                <span className="invisible absolute inset-x-3 bottom-3 flex h-9 items-center justify-center rounded-xl bg-white text-primaryColor opacity-100 group-hover:visible">
                                    {breed.breeds[0].name}
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
                    disabled={isLastPage}
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
