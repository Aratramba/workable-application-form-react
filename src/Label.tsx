import React = require("react");
import { ConfigContext } from "./ConfigContext";
import "./label.scss";

type LabelProps = {
  label: React.ReactElement | React.ReactNode;
  slug: string;
  required: boolean;
};

export const Label: React.ComponentType<LabelProps> = ({
  label,
  required,
  slug,
}) => {
  const config = React.useContext(ConfigContext);

  return (
    <div className="form-label-wrapper">
      <label className="form-label" htmlFor={`field-${slug}`}>
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
