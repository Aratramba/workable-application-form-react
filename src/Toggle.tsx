import { useContext } from "react";
import { Label } from "./Label";
import { ConfigContext } from "./ConfigContext";

type ToggleProps = {
  label: React.ReactNode;
  slug: string;
} & FormFieldType;

export const Toggle: React.ComponentType<ToggleProps> = ({
  name,
  required,
  id,
  defaultValue,
  label,
  slug,
}) => {
  const config = useContext(ConfigContext);
  return (
    <div className="toggle-wrapper">
      <div className="toggle">
        <input
          type="checkbox"
          name={name}
          required={required}
          id={id}
          defaultChecked={Boolean(defaultValue)}
          className="toggle__input"
        />
        <span className="toggle__check">{config.iconCheck()}</span>
      </div>

      <Label label={label} slug={slug} required={required} />
    </div>
  );
};
