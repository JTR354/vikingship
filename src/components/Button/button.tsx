import cn from "classnames";
import { useCallback, useMemo } from "react";

type ButtonSize = "lg" | "sm";

type ButtonType = "primary" | "default" | "danger" | "link";

interface ButtonCommonProps {
  btnType: ButtonType;
  size: ButtonSize;
}

type ButtonProps = Partial<
  ButtonCommonProps &
    React.PropsWithChildren &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>
>;

const Button: React.FC<ButtonProps> = ({
  btnType,
  size,
  children,
  className,
  onClick,
  disabled,
  ...others
}) => {
  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
    ) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick && onClick(e);
    },
    [onClick, disabled]
  );
  const classes = useMemo(
    () =>
      cn(
        "btn",
        className,
        size && `btn-${size}`,
        btnType && `btn-${btnType}`,
        disabled && "btn-disabled"
      ),
    [className, size, btnType, disabled]
  );

  if (btnType === "link") {
    return (
      <a className={classes} onClick={handleClick} {...others}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...others}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  btnType: "default",
};

export default Button;
