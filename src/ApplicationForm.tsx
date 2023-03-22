import React = require("react");
import { ConfigContext, DEFAULT_FORM_CONFIG } from "./ConfigContext";
import { Field } from "./Field";
import { Fieldset } from "./Fieldset";
import { Button } from "./Button";
import { ButtonRow } from "./ButtonRow";
import { Form } from "./Form";
import { cleanFormData, createWorkableCandidate } from "./utils";

type ApplicationFormProps = {
  config?: FormConfigType;
  form?: WorkableFieldset[];
  onSave?: (
    data: WorkableCandidate,
    cb: (error?: string | null) => void,
  ) => void;
};

export const ApplicationForm: React.ComponentType<ApplicationFormProps> = ({
  config = {},
  form = [],
  onSave = () => {},
}) => {
  const allFields: WorkableField[] = form.reduce((acc, fieldset) => {
    return [...acc, ...fieldset.fields];
  }, []);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    cb: (error?: string | null) => void,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries: any = Object.fromEntries(formData.entries());
    const allValues: any = {};
    Object.keys(entries).forEach((key) => {
      const question = allFields.find((q) => q.id === key);
      if (question?.type === "multiple" || question?.type === "dropdown") {
        allValues[key] = formData.getAll(key);
      } else {
        allValues[key] = formData.get(key);
      }
    });

    const cleanData: any = cleanFormData(allValues);

    const workableCandidate: WorkableCandidate = createWorkableCandidate(
      cleanData,
      allFields,
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

  return (
    <div className="application-form">
      <ConfigContext.Provider value={{ ...DEFAULT_FORM_CONFIG, ...config }}>
        <Form onSubmit={handleSubmit}>
          {form.map((fieldset) => (
            <Fieldset name={fieldset.name} key={fieldset.name}>
              {fieldset.fields.map((field) => (
                <Field key={field.id} name={field.id} field={field} />
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
