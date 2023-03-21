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
import { SelectField } from "./SelectField";
import { ChoiceField } from "./ChoiceField";

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
    maxLength?: number;
    choices?: { body?: string; id?: string }[];
    multiple?: boolean;
  } = {
    name: field.name,
    required: field.required,
    id: `field-${field.slug}`,
    defaultValue: field.value,
  };

  if ("max_length" in field) {
    inputProps.maxLength = field.max_length;
  }

  if ("choices" in field) {
    inputProps.choices = field.choices;
  }

  if ("single_answer" in field) {
    inputProps.multiple = !field.single_answer;
  }

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
      Component = () => <ChoiceField {...inputProps} />;
      break;

    case "dropdown":
      Component = () => <SelectField {...inputProps} />;
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
