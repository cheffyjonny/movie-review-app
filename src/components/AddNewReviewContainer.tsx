import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'

import type { Review } from '@/server/initialData'
import getNewId from '@/utils/getNewId'

import Container from './ui/Container'
import Input from './ui/Input'
import Select from './ui/Select'
import Button from './ui/Button'
import ErrorMsg from './ui/ErrorMsg'

type AddNewReviewContainerProps = {
  onSubmit: SubmitHandler<Review>
}

type Option = {
  value: number
  label: string
}

const options: Array<Option> = [
  { label: '5점', value: 5 },
  { label: '4점', value: 4 },
  { label: '3점', value: 3 },
  { label: '2점', value: 2 },
  { label: '1점', value: 1 },
]

const AddNewReviewContainer = ({ onSubmit }: AddNewReviewContainerProps) => {
  const [newId, serNewId] = useState(getNewId)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Review>({
    defaultValues: {
      id: newId,
      title: '',
      comment: '',
      score: 5,
    },
  })

  const localOnSubmit: SubmitHandler<Review> = (form) => {
    // Submit
    // John's NOTE : useForm convert the value to string, it needs to be converted back as the score is number type
    if (typeof form.score === 'string') {
      form.score = parseInt(form.score)
    }
    onSubmit!(form)

    // Display successful message
    toast.success('리뷰 등록 완료 하였습니다 😊')

    // Set up for the next review
    const nextId = newId + 1
    serNewId(nextId)
    reset({
      id: nextId,
      title: '',
      comment: '',
      score: 5,
    })
  }

  return (
    <Container
      title='신규 리뷰 등록'
      backgroundColor='#f5f5f5'
    >
      <form onSubmit={handleSubmit(localOnSubmit)}>
        <Input
          {...register('title', { required: '제목을 입력해 주세요' })}
          label='영화 제목'
          placeholder='제목을 입력해 주세요'
          name='title'
        />
        <ErrorMsg
          hasError={errors.title}
          message={errors.title?.message}
        />
        <Input
          {...register('comment', { required: '내용을 입력해 주세요' })}
          label='한줄평'
          placeholder='내용을 입력해 주세요'
          name='comment'
        />
        <ErrorMsg
          hasError={errors.comment}
          message={errors.comment?.message}
        />
        <Select
          {...register('score')}
          label='별점'
          name='score'
          options={options}
        />
        <Button
          customStyle={'margin-top:10px'}
          text='등록'
          type='submit'
        />
      </form>
      <ToastContainer
        position='bottom-right'
        autoClose={1700}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Container>
  )
}

export default AddNewReviewContainer
