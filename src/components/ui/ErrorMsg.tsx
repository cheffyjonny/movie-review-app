/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type ErrorMsgProps = {
  message: string
  hasError: boolean
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
