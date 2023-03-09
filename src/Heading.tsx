type HeadingProps = {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading: React.ComponentType<HeadingProps> = ({
  children,
  as = "h2",
}) => {
  const Element = as;
  return <Element className={`heading heading--${as}`}>{children}</Element>;
};
