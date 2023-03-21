import "./choicefield.scss";

type ChoiceFieldProps = { multiple?: boolean } & FormFieldType;

export const ChoiceField: React.ComponentType<ChoiceFieldProps> = ({
  name,
  required,
  id,
  choices,
  multiple,
}) => {
  return (
    <fieldset className="form-field__choice-fieldset">
      {choices?.map((choice) => {
        return (
          <div className="form-field__choice-wrapper" key={choice.id}>
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              id={`${id}+${choice.id}`}
              value={choice.id}
              required={required}
              className="form-field__choice"
            />
            <label htmlFor={(id = `${id}+${choice.id}`)}>{choice.body}</label>
          </div>
        );
      })}
    </fieldset>
  );
};
