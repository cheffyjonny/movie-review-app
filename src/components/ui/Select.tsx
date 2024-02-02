/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>

type SelectProps = {
  label: string
  options: Array<any>
  name: string
  onChange: (e: SelectChangeEvent) => void
}

const Select = ({ label, options, name, onChange }: SelectProps) => {
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

      <select
        name={name}
        onChange={onChange}
        css={css`
          width: 100%;
          border-radius: 5px;
          border: 1px #ddd solid;
          height: 40px;
          padding: 0px 12px;
          margin-top: 7px;
        `}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
