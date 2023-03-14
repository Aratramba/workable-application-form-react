import { FormField } from "./FormField";

type TextFieldProps = FormFieldType;

export const TextField: React.ComponentType<TextFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  maxLength,
}) => {
  return (
    <FormField>
      <input
        type="text"
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
        className="form-field__text"
        maxLength={maxLength}
      />
    </FormField>
  );
};
