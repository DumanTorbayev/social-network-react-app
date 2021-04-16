export type photosType = {
    large: string | null
    small: string | null
}

export type UserType = {
    id: number,
    name: string,
    status: string | null,
    photos: photosType,
    followed: boolean
}