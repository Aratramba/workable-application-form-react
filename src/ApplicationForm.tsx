import React = require("react");
import { ConfigContext, DEFAULT_FORM_CONFIG } from "./ConfigContext";
import { Field } from "./Field";
import { Heading } from "./Heading";
import { Fieldset } from "./Fieldset";

type ApplicationFormProps = {
  formFields: WorkableFormField[];
  questions: WorkableQuestion[];
  action?: string;
  config?: FormConfigType;
  fieldsets: {
    name: string;
    fields: string[];
  }[];
};

export const REST_OF_FIELDS_FLAG = "...";

export const ApplicationForm: React.ComponentType<ApplicationFormProps> = ({
  formFields,
  questions,
  action = "",
  config = {},
  fieldsets = [],
}) => {
  // get all fields from the form
  const allFields = formFields.map((field) => ({
    ...field,
    name: field.key,
    label: field.label,
    slug: field.key,
  }));

  const allQuestions = questions.map((field) => ({
    ...field,
    name: field.id,
    label: field.body,
    slug: field.id,
  }));

  const allFormFields = [...allFields, ...allQuestions];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  const allFieldsets = fieldsets.map((fieldset) => {
    return {
      name: fieldset.name,
      fields: fieldset.fields
        .map((field) => {
          if (field === REST_OF_FIELDS_FLAG) {
            return allFormFields;
          }

          const fieldsetField = allFormFields.find(
            ({ name }) => name === field,
          );
          allFormFields.splice(allFormFields.indexOf(fieldsetField), 1);
          return fieldsetField;
        })
        .flat()
        .filter(Boolean),
    };
  });

  console.log(allFieldsets);

  return (
    <ConfigContext.Provider value={{ ...DEFAULT_FORM_CONFIG, ...config }}>
      <form
        action={action}
        className="application-form"
        onSubmit={onSubmit}
        method="POST"
      >
        <Heading as="h1">
          {{ ...DEFAULT_FORM_CONFIG, ...config }.labelForm}
        </Heading>

        {allFieldsets.map((fieldset) => (
          <Fieldset name={fieldset.name}>
            {fieldset.fields.map((field) => (
              <Field key={field.name} name={field.name} field={field} />
            ))}
          </Fieldset>
        ))}

        {/* {allFormFields.map((field) => (
          <Field
            key={field.name}
            name={field.name}
            field={allFormFields.find(({ name }) => name === field.name)}
          />
        ))} */}

        <button type="submit" className="button button-submit">
          {config.labelSubmit || DEFAULT_FORM_CONFIG.labelSubmit}
        </button>
      </form>
    </ConfigContext.Provider>
  );
};
