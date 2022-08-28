import { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './styles'

type TextFieldProps = {
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ placeholder, ...rest }, ref) {
    return (
      <S.Input
        type='text'
        ref={ref}
        placeholder={placeholder} {...rest}
      />
    )
  })
