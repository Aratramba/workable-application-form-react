import "./applicationform.scss";

import React = require("react");
import { ConfigContext, DEFAULT_FORM_CONFIG } from "./ConfigContext";
import { Field, FieldProps } from "./Field";
import { Fieldset } from "./Fieldset";
import { Button } from "./Button";
import { ButtonRow } from "./ButtonRow";
import { Form } from "./Form";
import { cleanFormData, createWorkableCandidate } from "./utils";

type ApplicationFormProps = {
  formFields: WorkableFormField[];
  questions: WorkableQuestion[];
  action?: string;
  config?: FormConfigType;
  fieldsets?: FormFieldsetsType;
  onSave?: (
    data: WorkableCandidate,
    cb: (error?: string | null) => void,
  ) => void;
};

export const REST_OF_FIELDS_FLAG = "...";

export const ApplicationForm: React.ComponentType<ApplicationFormProps> = ({
  formFields,
  questions,
  config = {},
  fieldsets = [],
  onSave = () => {},
}) => {
  // get all fields from the form
  const allFields = (formFields || []).map((field) => ({
    ...field,
    name: field.key,
    label: field.label,
    slug: field.key,
  }));

  const allQuestions = (questions || []).map((field) => ({
    ...field,
    name: field.id,
    label: field.body,
    slug: field.id,
  }));

  const allFormFields = [...allFields, ...allQuestions];

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    cb: (error?: string | null) => void,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries: any = Object.fromEntries(formData.entries());
    const cleanData: any = cleanFormData(entries);
    const workableCandidate: WorkableCandidate = createWorkableCandidate(
      cleanData,
      formFields,
      questions,
    );

    onSave(workableCandidate, (error) => {
      if (error) {
        cb(error);
      } else {
        cb();
      }
    });

    return false;
  };

  // if no fieldsets are defined, add all fields to a single fieldset
  if (!fieldsets.length) {
    fieldsets.push({
      name: "",
      fields: allFormFields.map((field) => field.name),
    });
  }

  // if ... is not present in fieldsets add it to the end
  if (
    !fieldsets.some((fieldset) =>
      fieldset.fields.some((field) => field === REST_OF_FIELDS_FLAG),
    )
  ) {
    fieldsets[fieldsets.length - 1].fields.push(REST_OF_FIELDS_FLAG);
  }

  const definedFieldsets = fieldsets.map((fieldset) => {
    return {
      name: fieldset.name,
      fields: fieldset.fields
        .map((field) => {
          if (field === REST_OF_FIELDS_FLAG) {
            return REST_OF_FIELDS_FLAG;
          }
          const fieldsetField = allFormFields.find(
            ({ name }) => name === field,
          );
          if (fieldsetField) {
            allFormFields.splice(allFormFields.indexOf(fieldsetField), 1);
            return fieldsetField;
          }
          return null;
        })
        .flat()
        .filter(Boolean),
    };
  });

  // replace fieldset field named "..." with the remaining fields
  const allFieldsets = definedFieldsets.map((fieldset) => {
    const restOfFieldsField = fieldset.fields.find(
      (field) => field === REST_OF_FIELDS_FLAG,
    );

    if (restOfFieldsField) {
      fieldset.fields.splice(
        fieldset.fields.indexOf(restOfFieldsField),
        1,
        ...allFormFields,
      );
    }

    return fieldset;
  }) as unknown as {
    name?: string;
    fields: FieldProps[];
  }[];

  return (
    <div className="application-form">
      <ConfigContext.Provider value={{ ...DEFAULT_FORM_CONFIG, ...config }}>
        <Form onSubmit={handleSubmit}>
          {allFieldsets.map((fieldset, index) => (
            <Fieldset
              name={fieldset.name}
              key={fieldset.name || fieldset.fields[0].name}
            >
              {fieldset.fields
                .filter(({ name }) => Boolean(name))
                .map((field) => (
                  <Field
                    key={field.name}
                    name={field.name}
                    field={field as unknown as FieldProps["field"]}
                  />
                ))}
            </Fieldset>
          ))}

          <Fieldset>
            <ButtonRow>
              <Button type="submit" size="lg" style={{ width: "100%" }}>
                {config.labelSubmit || DEFAULT_FORM_CONFIG.labelSubmit}
              </Button>
            </ButtonRow>
          </Fieldset>
        </Form>
      </ConfigContext.Provider>
    </div>
  );
};
