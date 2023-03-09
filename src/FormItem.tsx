type FormItemProps = {
  children: React.ReactNode;
};

export const FormItem: React.ComponentType<FormItemProps> = ({ children }) => {
  return <div className="form-item">{children}</div>;
};
