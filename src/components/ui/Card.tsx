/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type CardProps = {
  title: string
  comment: string
  score?: number // John's NOTE : To make it reuseable for other cases.
}

const Card = ({ title, comment, score }: CardProps) => {
  return (
    <div
      css={css`
        padding: 25px 22px;
        margin: 20px 0;
        background-color: #fff;
        border: #ddd solid 1px;
        border-radius: 10px;
      `}
    >
      <div id='card-header'>
        <h2
          css={css`
            color: #194e84;
            font-size: 18px;
          `}
        >
          {title}
        </h2>
      </div>
      <div id='card-body'>
        <p
          css={css`
            color: #194e84;
          `}
        >
          {comment}
        </p>
        <div
          id='score'
          css={css`
            display: flex;
          `}
        >
          {Array(score)
            .fill(true)
            .map((_, i) => (
              <div
                key={i}
                css={css`
                  height: 15px;
                  width: 15px;
                  background-color: #fcf67b;
                  border: 1px solid #fcf67b;
                  border-radius: 20px;
                  margin-right: 5px;
                `}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Card
