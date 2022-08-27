import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type TextFieldProps = {
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ placeholder }: TextFieldProps) => {
  return (
    <S.Wrapper type='text' placeholder={placeholder} />
  )
}
