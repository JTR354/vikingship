import React from "react";
import cn from 'classnames'

type ButtonType = 'primary' | 'danger' | 'normal' | 'link'

type ButtonSize = 'lg' | 'sm' | 'default'

interface ButtonBaseProps {
  className?: string
  size?: ButtonSize
  btnType?: ButtonType
  disabled?:boolean
  href?:string
  children: React.ReactNode
}

type NativeButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorHTMLAttributes = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLElement>

type ButtonProps = Partial<NativeButtonProps & AnchorHTMLAttributes>

const Button:React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    size,
    disabled,
    href,
    ...restProps
  } = props
  const classes = cn('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled
  })
  if (btnType === 'link' && href) {
    return <a className={classes} href={href} {...restProps}>children</a>
  }
  return <button className={classes} disabled={disabled} {...restProps}>children</button>
}

Button.defaultProps = {
  size: 'default',
  btnType: 'primary'
}

export default Button