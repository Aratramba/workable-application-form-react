import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import TEST_VALUES from "./fixtures/values";

import form from "./fixtures/full-form";
import { REST_OF_FIELDS_FLAG } from "../src/ApplicationForm";
const domNode = document.getElementById("app");
const root = createRoot(domNode);

const onSave = (
  data: WorkableCandidate,
  cb: (error: string | null) => void,
) => {
  console.log(data);
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ candidate: data }),
  };

  // implement a backend API for this, as Workable does not allow CORS
  fetch(`/your-api/candidate`, options)
    .then((response) => response.json())
    .then((response) => cb(null))
    .catch((err) => cb(err.message));
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
          if (!input) return;
          if (
            input.nodeName === "INPUT" &&
            ["text", "tel", "number", "date", "hidden"].includes(input.type)
          ) {
            (input as any).value = value;
          } else if (
            input.nodeName === "INPUT" &&
            (input.type === "checkbox" || input.type === "radio")
          ) {
            if (typeof value === "string") {
              value = [value];
            }
            if (Array.isArray(value)) {
              value.forEach((v) => {
                const input: any = document.querySelector(
                  `[name="${key}"][value="${v}"]`,
                );
                if (input) {
                  input.checked = true;
                }
              });
              (input as any).checked = value.includes(input.value);
            } else {
              (input as any).checked = value;
            }
          } else if (input.nodeName === "TEXTAREA") {
            (input as any).value = value;
          } else if (input.nodeName === "SELECT") {
            (input as any).value = value;
          }
          input.dispatchEvent(new Event("change"));
        });
      }}
    >
      fill
    </button>
    <ApplicationForm
      onSave={onSave}
      formFields={[
        // for some reason the API does not return firstname, lastname and email fields
        {
          key: "firstname",
          label: "First Name",
          type: "string",
          required: true,
        },

        {
          key: "lastname",
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
            "firstname",
            "lastname",
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
