/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FieldError } from 'react-hook-form'

type ErrorMsgProps = {
  message: string | undefined
  hasError: FieldError | undefined
}

const ErrorMsg = ({ message, hasError }: ErrorMsgProps) => {
  return (
    <>
      {hasError ? (
        <span
          css={css`
            color: #e82020;
            font-size: 14px;
          `}
        >
          {message}
        </span>
      ) : (
        <></>
      )}
    </>
  )
}

export default ErrorMsg
