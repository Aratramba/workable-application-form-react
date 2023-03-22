export const ChoiceField: React.ComponentType<WorkableField> = ({
  id,
  options,
  singleOption,
  defaultValue,
}) => {
  return (
    <fieldset className="form-field__choice-fieldset">
      {options?.map((choice) => {
        return (
          <div className="form-field__choice-wrapper" key={choice.name}>
            <input
              type={singleOption ? "radio" : "checkbox"}
              name={id}
              id={`${id}${choice.name}`}
              value={choice.value}
              className="form-field__choice"
              defaultChecked={
                Array.isArray(defaultValue)
                  ? defaultValue.includes(choice.value)
                  : defaultValue === choice.value
              }
            />
            <label htmlFor={`${id}${choice.value}`}>{choice.value}</label>
          </div>
        );
      })}
    </fieldset>
  );
};
