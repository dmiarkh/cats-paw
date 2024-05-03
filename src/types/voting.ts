export interface RandomCat {
    id: string
    url: string
    width: number
    height: number
}

export interface Vote {
    id: string
    image_id: string
    sub_id: string
    created_at: string
    value: number
    country_code: string
    image: { id: string; url: string }
}
