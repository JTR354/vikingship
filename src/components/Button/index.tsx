import React from "react";
import cn from "classnames";

interface ButtonBaseProps {
  btnType?: "primary" | "danger" | "link";
  size?: "lg" | "sm";
  disabled?: boolean;
  href?: string;
}

type ButtonProps = ButtonBaseProps &
  Partial<
    React.ButtonHTMLAttributes<HTMLElement> &
      React.AnchorHTMLAttributes<HTMLElement>
  >;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, btnType, size, disabled, href, onClick, ...restProps } =
    props;
  const classes = cn("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link") {
    return (
      <a
        className={classes}
        href={href || ""}
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick(e);
        }}
        {...restProps}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
