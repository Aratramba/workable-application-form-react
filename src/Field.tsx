import { Fieldset } from "./Fieldset";
import React = require("react");

const TelephoneField = React.lazy(() => import("./TelephoneField"));
const UploadField = React.lazy(() => import("./UploadField"));
const AddMultipleComplex = React.lazy(() => import("./AddMultipleComplex"));

type FieldProps = {
  name: string;
  field: (WorkableFormField | WorkableQuestion) & {
    name: string;
    slug: string;
    label: string;
    value?: string;
  };
};

export const Field: React.ComponentType<FieldProps> = ({ name, field }) => {
  if (!field) {
    console.log(`Missing field: ${name}`);
    return null;
  }

  if (field.type === "complex") {
    if (field.multiple) {
      return <AddMultipleComplex name={name} field={field} />;
    }

    return (
      <Fieldset name={field.label}>
        {field.fields.map((subfield) => (
          <Field
            key={subfield.key}
            name={subfield.key}
            field={{ ...subfield, name: subfield.key, slug: subfield.key }}
          />
        ))}
      </Fieldset>
    );
  }

  const inputProps: {
    name: string;
    required: boolean;
    id: string;
    defaultValue?: string;
    defaultChecked?: boolean;
  } = {
    name: field.name,
    required: field.required,
    id: `field-${field.slug}`,
  };

  if (field.type !== "boolean") {
    inputProps.defaultValue = field.value;
  }

  if (field.type !== "boolean") {
    inputProps.defaultChecked = Boolean(field.value);
  }

  let Component = () => <input type="text" {...inputProps} />;

  if (field.type === "free_text") {
    Component = () => <textarea rows={5} {...inputProps} />;
  } else if (field.type === "file") {
    Component = () => (
      <UploadField name={field.slug} field={field as WorkableFormField} />
    );
  } else if (field.type === "boolean") {
    Component = () => <input type="checkbox" {...inputProps} />;
  } else if (field.type === "date") {
    Component = () => (
      <input
        type="date"
        name={field.name}
        required={field.required}
        id={`field-${field.slug}`}
      />
    );
  } else if (field.name === "phone") {
    Component = () => (
      <TelephoneField name={field.slug} field={field as WorkableFormField} />
    );
  } else if (field.type === "multiple_choice") {
    Component = () => <div>multiple choice</div>;
  } else if (field.type === "dropdown") {
    Component = () => <div>dropdown</div>;
  } else if (field.type === "numeric") {
    Component = () => <input type="number" {...inputProps} />;
  }

  if (field.type === "boolean") {
    return (
      <div className="field field-boolean">
        {Component && <Component />}
        <label className="field-label" htmlFor={`field-${field.slug}`}>
          {field.label}
          {field.required && <span className="required">*</span>}
        </label>
      </div>
    );
  }

  return (
    <div className="field">
      {field.value}
      <label className="field-label" htmlFor={`field-${field.slug}`}>
        {field.label}
        {field.required && <span className="required">*</span>}
      </label>

      <div className="input-wrapper">{Component && <Component />}</div>
    </div>
  );
};
