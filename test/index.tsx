import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import form from "./fixtures/form";
import { REST_OF_FIELDS_FLAG } from "../src/ApplicationForm";
const domNode = document.getElementById("app");
const root = createRoot(domNode);

root.render(
  <ApplicationForm
    formFields={[
      // for some reason the API does not return first_name, last_name and email fields
      {
        key: "first_name",
        label: "First Name",
        type: "string",
        required: true,
      },

      {
        key: "last_name",
        label: "Last Name",
        type: "string",
        required: true,
      },

      {
        key: "email",
        label: "Email",
        type: "string",
        required: true,
      },
      ...form.form_fields,
    ]}
    questions={[
      ...form.questions,

      // add privacy field
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
    fieldsets={[
      {
        name: "Personal information",
        fields: [
          "first_name",
          "last_name",
          "email",
          "headline",
          "phone",
          "address",
        ],
      },
      {
        name: "Profile",
        fields: ["education", "experience", "summary", "resume"],
      },
      {
        name: "Details",
        fields: [REST_OF_FIELDS_FLAG],
      },
    ]}
  />,
);
