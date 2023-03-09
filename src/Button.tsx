type ButtonProps = {
  onClick?: () => void;
  theme?: "primary" | "secondary" | "tertiary" | "ghost";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "md" | "lg";
  disabled?: boolean;
};

export const Button: React.ComponentType<ButtonProps> = ({
  onClick,
  theme = "primary",
  type = "button",
  size = "md",
  children,
  style,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${theme} button--${size} button--${
        disabled ? "disabled" : "enabled"
      }`}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
