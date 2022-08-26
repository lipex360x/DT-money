import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonsTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
} & ButtonsTypes

export const Button: React.ForwardRefRenderFunction<
  S.WrapperProps,
  ButtonProps
> = ({
  children,
  size = 'medium',
  fullWidth,
  icon,
  minimal,
  ...props
}: ButtonProps) => (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
