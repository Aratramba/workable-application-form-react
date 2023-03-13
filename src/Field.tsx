import React = require("react");
import { Label } from "./Label";
import { Toggle } from "./Toggle";
import { TextField } from "./TextField";
import { TextAreaField } from "./TextAreaField";
import { FormItem } from "./FormItem";
import { DateField } from "./DateField";
import { NumberField } from "./NumberField";

import { TelephoneField } from "./TelephoneField";
import { UploadField } from "./UploadField";
import { ComplexMultiple } from "./ComplexMultipleField";

export type FieldProps = {
  name: string;
  field: (WorkableFormField | WorkableQuestion) & {
    name: string;
    slug: string;
    label: React.ReactElement | React.ReactNode;
    value?: string;
  };
};

export const Field: React.ComponentType<FieldProps> = ({ name, field }) => {
  if (!field) {
    console.log(`Missing field: ${name}`);
    return null;
  }

  const inputProps: {
    name: string;
    required: boolean;
    id: string;
    defaultValue?: string;
  } = {
    name: field.name,
    required: field.required,
    id: `field-${field.slug}`,
    defaultValue: field.value,
  };

  let Component;

  switch (field.type) {
    case "free_text":
      Component = () => <TextAreaField {...inputProps} />;
      break;

    case "file":
      Component = () => (
        <UploadField name={field.slug} field={field as WorkableFormField} />
      );
      break;

    case "boolean":
      Component = () => (
        <Toggle {...inputProps} label={field.label} slug={field.slug} />
      );
      break;

    case "date":
      Component = () => <DateField {...inputProps} />;
      break;

    case "multiple_choice":
      Component = () => <div>multiple choice (not implemented)</div>;
      break;

    case "dropdown":
      Component = () => <div>dropdown (not implemented)</div>;
      break;

    case "numeric":
      Component = () => <NumberField {...inputProps} />;
      break;

    case "complex":
      if (field.multiple) {
        Component = () => <ComplexMultiple name={name} field={field} />;
      } else {
        Component = () => <div>complex simple (not implemented)</div>;
      }
      break;

    default:
      Component = () => <TextField {...inputProps} />;
  }

  if (field.name === "phone") {
    Component = () => <TelephoneField {...inputProps} />;
  }

  if (field.type === "boolean") {
    return <FormItem>{Component && <Component />}</FormItem>;
  }

  return (
    <FormItem>
      <Label label={field.label} slug={field.slug} required={field.required} />
      {Component && <Component />}
    </FormItem>
  );
};
