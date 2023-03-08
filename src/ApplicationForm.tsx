import { Field } from "./Field";
import { Fieldset } from "./Fieldset";
import { Row } from "./Row";

type ApplicationFormProps = {
  formFields: WorkableFormField[];
  questions: WorkableQuestion[];
  action?: string;
  layout?: FormLayout;
};

type FormLayout = {
  name: string;
  fields: (string | [string, string])[];
}[];

const REST_OF_FIELDS = "...";

export const DEFAULT_FORM_LAYOUT: FormLayout = [
  {
    name: "Personal Information",
    fields: [
      ["first_name", "last_name"],
      "email",
      "headline",
      "phone",
      "address",
      "avatar",
    ],
  },
  {
    name: "Profile",
    fields: ["education", "experience", "summary", "resume"],
  },
  {
    name: "Details",
    fields: ["cover_letter", REST_OF_FIELDS],
  },
];

const FIRST_NAME_FIELD: WorkableFormField = {
  key: "first_name",
  label: "First Name",
  type: "string",
  required: true,
};

const LAST_NAME_FIELD: WorkableFormField = {
  key: "last_name",
  label: "Last Name",
  type: "string",
  required: true,
};

const EMAIL_FIELD: WorkableFormField = {
  key: "email",
  label: "Email",
  type: "string",
  required: true,
};

export const ApplicationForm: React.ComponentType<ApplicationFormProps> = ({
  formFields,
  questions,
  action = "",
  layout = DEFAULT_FORM_LAYOUT,
}) => {
  // for some reason the API does not return first_name, last_name and email fields
  if (!formFields.find((field) => field.key === "first_name")) {
    formFields.push(FIRST_NAME_FIELD);
  }

  if (!formFields.find((field) => field.key === "last_name")) {
    formFields.push(LAST_NAME_FIELD);
  }

  if (!formFields.find((field) => field.key === "email")) {
    formFields.push(EMAIL_FIELD);
  }

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

  // get all fields used in the layout
  const allLayoutFields = layout
    .map((fieldset) => {
      return fieldset.fields.map((field) => {
        return field;
      });
    })
    .flat(2);

  // find fields that are not in the layout
  const restFields = allFormFields.filter(
    (field) => !allLayoutFields.includes(field.name),
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <form action={action} className="application-form" onSubmit={onSubmit}>
      {layout.map((fieldset) => (
        <Fieldset key={fieldset.name} name={fieldset.name}>
          {fieldset.fields.map((field) => (
            <Row key={field.toString()}>
              {Array.isArray(field) ? (
                field.map((field) => (
                  <>
                    <Field
                      key={field}
                      name={field}
                      field={allFormFields.find(({ name }) => name === field)}
                    />
                  </>
                ))
              ) : field !== REST_OF_FIELDS ? (
                <Field
                  name={field}
                  field={allFormFields.find(({ name }) => name === field)}
                />
              ) : (
                <Fieldset key={field}>
                  {restFields.map((field) => (
                    <Row key={field.name}>
                      <Field name={field.name} field={field} />
                    </Row>
                  ))}
                </Fieldset>
              )}
            </Row>
          ))}
        </Fieldset>
      ))}

      <button type="submit" className="button button-submit">
        Submit
      </button>
    </form>
  );
};
