import { useState } from "react";
import { FormField } from "./FormField";

import { MaxLength } from "./MaxLength";

type TextAreaFieldProps = {} & FormFieldType;

export const TextAreaField: React.ComponentType<TextAreaFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  maxLength,
}) => {
  const [value, setValue] = useState<string>(null);
  return (
    <FormField>
      <textarea
        name={name}
        required={required}
        defaultValue={defaultValue}
        id={id}
        rows={5}
        className="form-field__textarea"
        maxLength={maxLength}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
      <MaxLength count={value?.length} maxLength={maxLength} />
    </FormField>
  );
};
