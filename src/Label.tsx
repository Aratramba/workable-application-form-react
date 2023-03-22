import React = require("react");
import { ConfigContext } from "./ConfigContext";

type LabelProps = {
  label: React.ReactElement | React.ReactNode;
  id: string;
  required: boolean;
};

export const Label: React.ComponentType<LabelProps> = ({
  label,
  required,
  id,
}) => {
  const config = React.useContext(ConfigContext);

  return (
    <div className="form-label-wrapper">
      <label className="form-label" htmlFor={`workable-${id}`}>
        {label}
        {required ? (
          <span className="form-label__required">*</span>
        ) : (
          <span className="form-label__optional">{config.labelOptional}</span>
        )}
      </label>
    </div>
  );
};
