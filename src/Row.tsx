import React = require("react");

type RowProps = {
  children: React.ReactNode;
};

export const Row: React.ComponentType<RowProps> = ({ children }) => {
  const count = React.Children.count(children);

  if (count === 1) {
    return <div className="row">{children}</div>;
  }

  return (
    <div className="row group">
      {React.Children.map(children, (child) => (
        <div key={child.toString()}>{child}</div>
      ))}
    </div>
  );
};
