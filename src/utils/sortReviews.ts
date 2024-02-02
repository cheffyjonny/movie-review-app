type Review = {
  id: number
  title: string
  comment: string
  score: number
}
type Reviews = Array<Review>

export const sortReviews = (reviews: Reviews) => {
  return reviews.sort((a: Review, b: Review) => {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()
    const scoreA = a.score
    const scoreB = b.score

    if (scoreB === scoreA) {
      return titleA > titleB ? 1 : -1
    } else {
      return scoreB - scoreA
    }
  })
}
