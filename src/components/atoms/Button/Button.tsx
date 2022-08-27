import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonsTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: 'green' | 'gray' | 'red'
  variant?: 'income' | 'outcome'
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
} & ButtonsTypes

export const Button: React.ForwardRefRenderFunction<
  S.WrapperProps,
  ButtonProps
> = ({
  children,
  fullWidth,
  icon,
  minimal,
  variant,
  size = 'medium',
  backgroundColor = "green",
  ...props
}: ButtonProps) => (
    <S.Wrapper
      backgroundColor={backgroundColor}
      size={size}
      fullWidth={fullWidth}
      variant={variant}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
