export interface Breed {
    id: string
    name: string
    description: string
    reference_image_id: string
}

export interface BreedImage {
    breeds: Breed[]
    height: number
    width: number
    id: string
    url: string
}
