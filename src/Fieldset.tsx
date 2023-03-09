type FieldsetProps = {
  name?: string;
  children: React.ReactNode;
};

export const Fieldset: React.ComponentType<FieldsetProps> = ({
  name,
  children,
}) => {
  return (
    <fieldset className="form-fieldset">
      {name && (
        <legend className="form-legend">
          <span className="form-legend__title">{name}</span>
        </legend>
      )}
      {children}
    </fieldset>
  );
};
