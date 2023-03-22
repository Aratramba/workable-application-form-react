import { useState } from "react";
import { FormField } from "./FormField";

import { MaxLength } from "./MaxLength";

export const TextAreaField: React.ComponentType<WorkableField> = ({
  id,
  required,
  maxLength,
  defaultValue,
}) => {
  const [value, setValue] = useState<string>(null);
  return (
    <FormField>
      <textarea
        name={id}
        required={required}
        id={`workable-${id}`}
        defaultValue={defaultValue}
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
