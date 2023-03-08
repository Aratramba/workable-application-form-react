import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import form from "./fixtures/form";
const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(
  <ApplicationForm
    formFields={form.form_fields}
    questions={form.questions}
    config={{
      telephoneInitialCountry: "IT",
      telephonePreferredCountries: ["gb", "it", "es"],
    }}
  />,
);
