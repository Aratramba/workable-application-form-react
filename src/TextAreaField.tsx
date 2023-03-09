import { FormField } from "./FormField";

type TextAreaFieldProps = {} & FormFieldType;

export const TextAreaField: React.ComponentType<TextAreaFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
}) => {
  return (
    <FormField>
      <textarea
        name={name}
        required={required}
        defaultValue={defaultValue}
        id={id}
        rows={5}
        className="form-field__textarea"
      />
    </FormField>
  );
};
