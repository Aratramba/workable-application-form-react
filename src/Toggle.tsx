import { Label } from "./Label";

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
      </div>

      <Label label={label} slug={slug} required={required} />
    </div>
  );
};
