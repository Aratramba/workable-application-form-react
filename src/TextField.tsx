import { useState } from "react";
import { FormField } from "./FormField";
import { MaxLength } from "./MaxLength";

type TextFieldProps = FormFieldType;

export const TextField: React.ComponentType<TextFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  maxLength,
}) => {
  const [value, setValue] = useState<string>(null);

  return (
    <FormField>
      <input
        type="text"
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
        className="form-field__text"
        maxLength={maxLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <MaxLength count={value?.length} maxLength={maxLength} />
    </FormField>
  );
};
