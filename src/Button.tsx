type ButtonProps = {
  onClick?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "md" | "lg";
};

export const Button: React.ComponentType<ButtonProps> = ({
  onClick,
  theme = "primary",
  type = "button",
  size = "md",
  children,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${theme} button--${size}`}
      style={style}
    >
      {children}
    </button>
  );
};
