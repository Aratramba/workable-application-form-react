type FieldsetProps = {
  name?: string;
  children: React.ReactNode;
};

export const Fieldset: React.ComponentType<FieldsetProps> = ({
  name,
  children,
}) => {
  return (
    <fieldset className="fieldset">
      {name && <legend className="legend">{name}</legend>}
      {children}
    </fieldset>
  );
};
