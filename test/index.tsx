import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import form from "./fixtures/form";
const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(
  <ApplicationForm
    formFields={form.form_fields}
    questions={[
      ...form.questions,

      {
        id: "privacy",
        type: "boolean",
        required: true,
        body: (
          <span>
            I have read, understand and accept the content of the{" "}
            <a href="https://google.com" target="_blank">
              Privacy Notice
            </a>{" "}
            and consent to the processing of my data as part of this
            application.
          </span>
        ),
      },
    ]}
    config={{
      telephoneInitialCountry: "IT",
      telephonePreferredCountries: ["gb", "it", "es"],
    }}
  />,
);
