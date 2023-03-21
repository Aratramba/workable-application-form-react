import { FormField } from "./FormField";
import "./selectfield.scss";

type SelectFieldProps = FormFieldType;

export const SelectField: React.ComponentType<SelectFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  maxLength,
  choices,
}) => {
  return (
    <FormField>
      {/* <input
        type="number"
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
        className="form-field__text form-field__number"
        maxLength={maxLength}
      /> */}
      <select className="form-field__select">
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
