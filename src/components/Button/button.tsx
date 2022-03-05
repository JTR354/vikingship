import React from "react";
import cn from 'classnames'

type ButtonType = 'primary' | 'danger' | 'default' | 'link'

type ButtonSize = 'lg' | 'sm'

interface ButtonBaseProps {
  className?: string
  size?: ButtonSize
  btnType?: ButtonType
  disabled?:boolean
  href?:string
  children: React.ReactNode
}

type ButtonProps = ButtonBaseProps & Partial<React.ButtonHTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLElement>>

const Button:React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    size,
    disabled,
    href,
    children,
    ...restProps
  } = props
  const classes = cn('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': btnType === 'link' && disabled
  })
  if (btnType === 'link' && href) {
    return <a className={classes} href={href} {...restProps}>{children}</a>
  }
  return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
}

Button.defaultProps = {
  disabled: false,
  btnType: 'primary'
}

export default Button