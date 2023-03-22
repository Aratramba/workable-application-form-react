import { FormField } from "./FormField";

export const DateField: React.ComponentType<WorkableField> = ({
  required,
  id,
  defaultValue,
}) => {
  return (
    <FormField>
      <input
        type="date"
        name={id}
        defaultValue={defaultValue}
        required={required}
        id={`workable-${id}`}
        className="form-field__text form-field__date"
      />
    </FormField>
  );
};
