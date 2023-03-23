import React = require("react");
import { Label } from "./Label";
import { Toggle } from "./Toggle";
import { TextField } from "./TextField";
import { TextAreaField } from "./TextAreaField";
import { FormItem } from "./FormItem";
import { DateField } from "./DateField";
import { NumberField } from "./NumberField";

import { TelephoneField } from "./TelephoneField";
import { UploadField, UploadFieldProps } from "./UploadField";
import { ComplexMultiple } from "./ComplexMultipleField";
import { SelectField } from "./SelectField";
import { ChoiceField } from "./ChoiceField";

export type FieldProps = {
  name: string;
  field: WorkableField;
  onAvatarUpload?: UploadFieldProps["onAvatarUpload"];
  onFileUpload?: UploadFieldProps["onFileUpload"];
};

export const Field: React.ComponentType<FieldProps> = ({
  name,
  field,
  onAvatarUpload,
  onFileUpload,
}) => {
  if (!field) {
    console.log(`Missing field: ${name}`);
    return null;
  }

  let Component;

  switch (field.type) {
    case "paragraph":
      Component = () => <TextAreaField {...field} />;
      break;

    case "file":
      Component = () => (
        <UploadField
          {...field}
          onAvatarUpload={onAvatarUpload}
          onFileUpload={onFileUpload}
        />
      );
      break;

    case "boolean":
      Component = () => <Toggle {...field} />;
      break;

    case "date":
      Component = () => <DateField {...field} />;
      break;

    case "multiple":
      Component = () => <ChoiceField {...field} />;
      break;

    case "dropdown":
      Component = () => <SelectField {...field} />;
      break;

    case "number":
      Component = () => <NumberField {...field} />;
      break;

    case "group":
      Component = () => <ComplexMultiple {...field} />;
      break;

    default:
      Component = () => <TextField {...field} />;
  }

  if (field.id === "phone") {
    Component = () => <TelephoneField {...field} />;
  }

  if (field.type === "boolean") {
    return <FormItem>{Component && <Component />}</FormItem>;
  }

  return (
    <FormItem>
      <Label label={field.label} id={field.id} required={field.required} />
      {Component && <Component />}
      {field.helper && <p className="form-helper">{field.helper}</p>}
    </FormItem>
  );
};
