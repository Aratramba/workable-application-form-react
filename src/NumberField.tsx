import { FormField } from "./FormField";

export const NumberField: React.ComponentType<WorkableField> = ({
  required,
  id,
  maxLength,
  defaultValue,
}) => {
  return (
    <FormField>
      <input
        type="number"
        name={id}
        defaultValue={defaultValue}
        required={required}
        id={`workable-${id}`}
        className="form-field__text form-field__number"
        maxLength={maxLength}
      />
    </FormField>
  );
};
