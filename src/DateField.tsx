import { FormField } from "./FormField";

type DateFieldProps = FormFieldType;

export const DateField: React.ComponentType<DateFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
}) => {
  return (
    <FormField>
      <input
        type="date"
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
        className="form-field__text form-field__date"
      />
    </FormField>
  );
};
