import { initialData } from '@/server/initialData'

let newId: number

const reviewsString = window.localStorage.getItem('reviews')

// WITH local storage
if (reviewsString) {
  const reviewsArr = JSON.parse(reviewsString)
  newId = reviewsArr.length
}
// WITHOUT local storage
else {
  newId = initialData.length
}

export default newId
