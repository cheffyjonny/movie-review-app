import { useCallback, useEffect, useState } from 'react'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>
type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>

interface UseFormProps<T> {
  initialValues: T
  validate(values: T): Partial<T>
  onSubmit(values: T): void
}

function useForm<T>({ initialValues, validate, onSubmit }: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<T>>({})
  const [touched, setTouched] = useState({} as unknown as T)

  const handleInputChange = (e: InputChangeEvent) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = (e: InputChangeEvent) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    })
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    setValues({
      ...values,
      [e.target.name]: parseInt(e.target.value),
    })
  }

  const handleSubmit = (e: FormEvent) => {
    // e.preventDefault()

    // 모든 필드에 방문했다고 표시한다
    if (typeof values === 'object' && values !== null) {
      setTouched(
        Object.keys(values).reduce((touched, field) => {
          ;(touched as unknown as any)[field] = true
          return touched
        }, {} as T)
      )
    }

    const errors = validate(values)

    setErrors(errors)
    if (Object.values(errors).some((v) => v)) {
      return
    }

    // useForm의 폼 제출을 완료하고 사용하는 쪽으로 알린다
    onSubmit(values)
  }

  const setNextForm = () => {
    setValues(initialValues)
  }

  // 입력값에 따라 검증 함수를 실행하는 함수를 정의한다
  const runValidator = useCallback(() => validate(values), [values])

  useEffect(() => {
    const errors = runValidator()
    setErrors(errors)
  }, [runValidator])

  // 훅을 사용하는 쪽에 제공하는 api다
  return {
    values,
    errors,
    touched,
    handleInputChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
  }
}

export default useForm
