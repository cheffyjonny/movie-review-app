export type Review = {
  id: number
  title: string
  comment: string
  score: number
}
export type Reviews = Array<Review>

export const initialData: Reviews = [
  {
    id: 0,
    title: 'The Wailing',
    comment: 'Best Korean horror movie...!',
    score: 5,
  },
  {
    id: 1,
    title: 'Joker',
    comment: 'No wonder why Joaquin won Oscar!',
    score: 5,
  },
  {
    id: 2,
    title: 'Interstellar',
    comment:
      'I had to watch twice to understand fully, but it is one of the best movies in my life.',
    score: 5,
  },
]
