type ButtonProps = {
  onClick?: () => void;
  theme?: "primary" | "secondary" | "tertiary" | "ghost";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "md" | "lg";
  disabled?: boolean;
  className?: string;
};

export const Button: React.ComponentType<ButtonProps> = ({
  onClick,
  theme = "primary",
  type = "button",
  size = "md",
  children,
  style,
  disabled,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${theme} button--${size} button--${
        disabled ? "disabled" : "enabled"
      } ${className}`}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
