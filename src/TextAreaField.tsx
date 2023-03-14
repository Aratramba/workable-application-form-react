import { FormField } from "./FormField";
import "./textareafield.scss";

type TextAreaFieldProps = {} & FormFieldType;

export const TextAreaField: React.ComponentType<TextAreaFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  maxLength,
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
        maxLength={maxLength}
      />
    </FormField>
  );
};
