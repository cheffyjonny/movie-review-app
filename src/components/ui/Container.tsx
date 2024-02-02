/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  backgroundColor?: string
  title: string
}

const Container = ({
  children,
  backgroundColor = 'fff',
  title,
}: ContainerProps) => {
  return (
    <div
      css={css`
        padding: 12px 22px;
        background-color: ${backgroundColor};
      `}
    >
      <div id='container-header'>
        <h1
          css={css`
            color: #194e84;
            font-size: 18px;
          `}
        >
          {title}
        </h1>
      </div>
      <div id='container-body'>{children}</div>
    </div>
  )
}

export default Container
