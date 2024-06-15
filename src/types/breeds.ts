export interface Breed {
    id: string
    name: string
    description: string
    image: BreedImage
}

export interface BreedImage {
    id: string
    width: number
    height: number
    url: string
}

export interface BreedsLoaderData {
    allBreeds: Breed[]
    breedsToDisplay: Breed[]
    pageNumber: number
    lastPageNumber: number
}
