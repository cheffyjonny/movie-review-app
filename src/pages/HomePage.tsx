import { useEffect, useState } from 'react'
import { Review, Reviews, initialData } from '@/server/initialData'
import { InputChangeEvent } from '@/components/ui/Input'
import { sortReviews } from '@/utils/sortReviews'

import AddNewReviewContainer from '@/components/AddNewReviewContainer'
import SearchReviewContainer from '@/components/SearchReviewContainer'
import ReviewListContainer from '@/components/ReviewListContainer'

const HomePage = () => {
  const [filteredReviews, setFilteredReviews] = useState<Reviews>([])
  const [absoluteReviews, setAbsoluteReviews] = useState<Reviews>([])
  const [searchText, setSearchText] = useState<string>()

  useEffect(() => {
    const reviewsString = window.localStorage.getItem('reviews')

    // WITHOUT local storage
    if (!reviewsString) {
      // Initializing local storage
      const reviewsString = JSON.stringify(initialData)
      window.localStorage.setItem('reviews', reviewsString)

      // Fetch from initial data
      const sortedReviews = sortReviews(initialData)
      setAbsoluteReviews(sortedReviews)
    }
    // WITH local storage
    else {
      // Fetch from local storage
      const reviewsObj = JSON.parse(reviewsString!)
      const sortedReviews = sortReviews(reviewsObj)
      setAbsoluteReviews(sortedReviews)
    }
  }, [])

  const handleSubmit = (form: Review) => {
    const newReviews = [...absoluteReviews, form]

    const sortedReviews = sortReviews(newReviews)
    setAbsoluteReviews(sortedReviews)

    // Update local storage
    const reviewsString = JSON.stringify(newReviews)
    window.localStorage.setItem('reviews', reviewsString)
  }

  const handleChange = (e: InputChangeEvent) => {
    const searchText = e.target.value

    setSearchText(searchText)

    const filteredReviews = filterReviews(absoluteReviews, searchText)
    const sortedReviews = sortReviews(filteredReviews)

    setFilteredReviews(sortedReviews)
  }

  const filterReviews = (reviews: Reviews, text: string) => {
    const filteredReviews = reviews.filter((review) =>
      review.title.includes(text)
    )
    return filteredReviews
  }

  return (
    <>
      <AddNewReviewContainer onSubmit={handleSubmit} />
      <SearchReviewContainer onChange={handleChange} />
      <ReviewListContainer
        reviews={searchText ? filteredReviews : absoluteReviews}
      />
    </>
  )
}

export default HomePage
