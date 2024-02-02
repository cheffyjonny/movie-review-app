/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type InputProps = {
  label?: string
  placeholder: string
  backgroundColor?: string
  name: string
  onChange: (e: InputChangeEvent) => void
  onBlur?: (e: InputChangeEvent) => void
}

const Input = ({
  label,
  placeholder,
  backgroundColor = 'fff',
  name,
  onBlur,
  onChange,
}: InputProps) => {
  return (
    <div
      css={css`
        margin: 11px 0px;
      `}
    >
      <label
        css={css`
          font-size: 14px;
          font-weight: 600;
          color: #194e84;
        `}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        css={css`
          width: 100%;
          box-sizing: border-box;
          border-radius: 5px;
          border: 1px #ddd solid;
          height: 40px;
          margin-top: 7px;
          padding: 0px 12px;
          background-color: ${backgroundColor};
        `}
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
