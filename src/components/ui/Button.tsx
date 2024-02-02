/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type ButtonProps = {
  text: string
  customStyle?: string
  type: 'button' | 'submit' | 'reset'
}

const Button = ({ text, customStyle, type = 'button' }: ButtonProps) => {
  return (
    <div
      css={css`
        margin: 11px 0px;
      `}
    >
      <button
        type={type}
        css={css`
          width: 100%;
          font-size: 15px;
          border-radius: 10px;
          background-color: #194e84;
          color: #fff;
          border: 1px #ddd solid;
          height: 40px;
          padding: 0px 12px;
          ${customStyle}
        `}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
