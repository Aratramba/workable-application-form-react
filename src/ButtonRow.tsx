import "./buttonrow.scss";

type ButtonRowProps = {
  children?: React.ReactNode;
};

export const ButtonRow: React.ComponentType<ButtonRowProps> = ({
  children,
}) => {
  return <div className="button-row">{children}</div>;
};
