import { useContext } from "react";
import { Label } from "./Label";
import { ConfigContext } from "./ConfigContext";

export const Toggle: React.ComponentType<WorkableField> = ({
  required,
  id,
  label,
  defaultValue,
}) => {
  const config = useContext(ConfigContext);
  return (
    <div className="toggle-wrapper">
      <div className="toggle">
        <input
          type="checkbox"
          name={id}
          required={required}
          id={`workable-${id}`}
          className="toggle__input"
          defaultChecked={Boolean(defaultValue)}
        />
        <span className="toggle__check">{config.iconCheck()}</span>
      </div>

      <Label label={label} id={id} required={required} />
    </div>
  );
};
