type MaxLengthProps = {
  count?: number;
  maxLength?: number;
};

export const MaxLength = ({ count = 0, maxLength }) => {
  if (!maxLength) return null;

  return (
    <span className="form-field__maxlength">
      {count} / {maxLength}
    </span>
  );
};
