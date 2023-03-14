import { createRoot } from "react-dom/client";
import { ApplicationForm } from "../src";

import form from "./fixtures/form";
const domNode = document.getElementById("app");
const root = createRoot(domNode);

const onSave = (
  data: WorkableCandidate,
  cb: (error: string | null) => void,
) => {
  console.log(data);
  cb(null);
};

root.render(
  <ApplicationForm
    onSave={onSave}
    formFields={form.form_fields}
    questions={[form.questions]}
  />,
);
