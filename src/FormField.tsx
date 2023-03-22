type FormFieldProps = {
  children: React.ReactNode;
};

export const FormField: React.ComponentType<FormFieldProps> = ({
  children,
}) => {
  return (
    <div className="form-field">
      <div className="form-field__wrapper">{children}</div>
    </div>
  );
};
