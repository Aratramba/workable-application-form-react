import { FormField } from "./FormField";

type NumberFieldProps = FormFieldType;

export const NumberField: React.ComponentType<NumberFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
}) => {
  return (
    <FormField>
      <input
        type="number"
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
        className="form-field__text form-field__number"
      />
    </FormField>
  );
};
