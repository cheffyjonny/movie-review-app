import Container from './ui/Container'
import Input, { InputProps } from './ui/Input'

type SearchReviewContainerProps = {
  onChange: InputProps['onChange']
}

const SearchReviewContainer = ({ onChange }: SearchReviewContainerProps) => {
  return (
    <Container title='리뷰 검색'>
      <Input
        placeholder='영화 제목을 입력해 주세요'
        backgroundColor='#f5f5f5'
        name='search'
        onChange={onChange}
      />
    </Container>
  )
}

export default SearchReviewContainer
