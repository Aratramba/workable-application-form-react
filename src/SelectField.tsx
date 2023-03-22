import { FormField } from "./FormField";

export const SelectField: React.ComponentType<WorkableField> = ({
  required,
  id,
  options,
  defaultValue,
}) => {
  return (
    <FormField>
      <select
        className="form-field__select"
        name={id}
        required={required}
        id={`workable-${id}`}
        defaultValue={defaultValue}
      >
        <option value={null}></option>
        {options?.map((choice) => {
          return (
            <option key={choice.name} value={choice.name}>
              {choice.value}
            </option>
          );
        })}
      </select>
    </FormField>
  );
};
