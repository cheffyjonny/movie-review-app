import type { Review } from '@/server/initialData'
import newId from '@/utils/getNewId'
import useForm from '@/hooks/useForm'

import Container from './ui/Container'
import Input from './ui/Input'
import Select from './ui/Select'
import Button from './ui/Button'
import ErrorMsg from './ui/ErrorMsg'

type AddNewReviewContainerProps = {
  onSubmit: (form: Review) => void
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
  const {
    errors,
    touched,
    handleInputChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
  } = useForm<Review>({
    initialValues: {
      id: newId,
      title: '',
      comment: '',
      score: 5,
    },
    validate: (form: Review) => {
      const errors = {
        title: '',
        comment: '',
      }

      if (!form.title) {
        errors.title = '제목을 입력해 주세요'
      }
      if (!form.comment) {
        errors.comment = '내용을 입력해 주세요'
      }

      return errors
    },
    onSubmit: (form: Review) => {
      onSubmit(form)
    },
  })

  return (
    <Container
      title='신규 리뷰 등록'
      backgroundColor='#f5f5f5'
    >
      <form onSubmit={handleSubmit}>
        <Input
          label='영화 제목'
          placeholder='제목을 입력해 주세요'
          name='title'
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <ErrorMsg
          hasError={!!touched.title && !!errors.title}
          message={errors.title!}
        />
        <Input
          label='한줄평'
          placeholder='내용을 입력해 주세요'
          name='comment'
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <ErrorMsg
          hasError={!!touched.comment && !!errors.comment}
          message={errors.comment!}
        />
        <Select
          label='별점'
          name='score'
          options={options}
          onChange={handleSelectChange}
        />
        <Button
          customStyle={'margin-top:10px'}
          text='등록'
          type='submit'
        />
      </form>
    </Container>
  )
}

export default AddNewReviewContainer
