import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { Review } from './server/initialData'

const addReview = (Reviews: Array<Review>) => {
  const titleInput = screen.getByPlaceholderText('제목을 입력해 주세요')
  const commentInput = screen.getByPlaceholderText('내용을 입력해 주세요')
  const AddBtn = screen.getByRole('button', { name: '등록' })

  Reviews.forEach((task: Review) => {
    fireEvent.change(titleInput, { target: { value: task.title } })
    fireEvent.change(commentInput, { target: { value: task.comment } })
    fireEvent.click(AddBtn)
  })
}

test('Fetch initial data', () => {
  render(<App />)
  const firstReview = screen.getByText('미나리')

  expect(firstReview).toBeInTheDocument()
})

test('Add a review', async () => {
  render(<App />)

  addReview([
    {
      id: 5,
      title: 'Meet joe black',
      comment: 'Best movie in my life.',
      score: 5,
    },
  ])

  await waitFor(() => {
    const divElement = screen.getByText('Meet joe black')
    expect(divElement).toBeInTheDocument()
  })
})

test('Search reviews', async () => {
  render(<App />)

  const searchInput = screen.getByPlaceholderText('영화 제목을 입력해 주세요')
  expect(searchInput).toBeInTheDocument()

  fireEvent.change(searchInput, { target: { value: '터미' } })

  await waitFor(() => {
    const result = screen.getAllByTestId('card').length
    expect(result).toBe(2)
  })
})
