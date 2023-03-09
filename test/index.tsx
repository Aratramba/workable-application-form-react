import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import TEST_VALUES from "./fixtures/values";

import form from "./fixtures/form";
import { REST_OF_FIELDS_FLAG } from "../src/ApplicationForm";
const domNode = document.getElementById("app");
const root = createRoot(domNode);

const onSave = (
  data: WorkableCandidate,
  cb: (error: string | null) => void,
) => {
  console.log("saving");
  console.log(data);

  setTimeout(() => {
    cb(null);
    console.log("redirect");
  }, 5000);
};

root.render(
  <>
    <button
      type="button"
      style={{
        padding: 10,
        fontSize: 20,
        background: "var(--color-primary)",
        color: "white",
        position: "fixed",
        top: 20,
        left: 20,
      }}
      onClick={() => {
        Object.entries(TEST_VALUES).forEach(([key, value]) => {
          const input: any = document.querySelector(`[name="${key}"]`);
          if (
            input.nodeName === "INPUT" &&
            ["text", "tel", "number", "date"].includes(input.type)
          ) {
            (input as any).value = value;
          }
          if (input.nodeName === "INPUT" && input.type === "checkbox") {
            (input as any).checked = value;
          }
          console.log(input, value, key);
        });
      }}
    >
      fill
    </button>
    <ApplicationForm
      onSave={onSave}
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
        ...(form.form_fields || []),
      ]}
      questions={[
        ...(form.questions || []),

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
        {
          fields: ["privacy"],
        },
      ]}
    />
  </>,
);
