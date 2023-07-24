export interface Movie {
  id: number
  name: string
  genres: string[]
  image: string
  description: string
  rating?: number
  inTheaters: boolean
}
