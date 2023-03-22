import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import form from "./fixtures/full-form";
const domNode = document.getElementById("app");
const root = createRoot(domNode);

root.render(
  <ApplicationForm
    onSave={(data, cb) => {
      console.log(data);
      console.log(JSON.stringify(data));

      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({ candidate: data }),
      };

      // implement a backend API for this, as Workable does not allow CORS
      fetch(process.env.WORKABLE_API_URL, options)
        .then((response) => response.json())
        .then((response) => cb(null))
        .catch((err) => {
          let errorMessage = err.message;
          try {
            errorMessage = JSON.parse(errorMessage)?.error;
          } catch (err) {}

          cb(errorMessage);
        });
    }}
    formFields={[
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
      ...form.form_fields,
    ]}
    questions={[]}
  />,
);
