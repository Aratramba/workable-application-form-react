import { FormField } from "./FormField";
import "./selectfield.scss";

type SelectFieldProps = FormFieldType;

export const SelectField: React.ComponentType<SelectFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  choices,
}) => {
  return (
    <FormField>
      <select
        className="form-field__select"
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
      >
        {choices?.map((choice) => {
          return (
            <option key={choice.id} value={choice.id}>
              {choice.body}
            </option>
          );
        })}
      </select>
    </FormField>
  );
};
