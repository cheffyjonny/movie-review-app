import type { Reviews } from '@/server/initialData'

import Container from './ui/Container'
import Card from './ui/Card'

type ReviewListContainerProps = {
  reviews: Reviews
}

const ReviewListContainer = ({ reviews }: ReviewListContainerProps) => {
  return (
    <Container
      title='리뷰 내역'
      backgroundColor='#f5f5f5'
    >
      {reviews.map((review, index) => (
        <Card
          key={index}
          title={review.title}
          comment={review.comment}
          score={review.score}
        />
      ))}
    </Container>
  )
}

export default ReviewListContainer
