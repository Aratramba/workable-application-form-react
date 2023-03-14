# Workable Application Form React (not official)

This is a React component that renders a workable application form based on fields from https://workable.readme.io/reference/jobsshortcodeapplication_form. It outputs data that can be sent to the Workable Candidate API https://workable.readme.io/reference/job-candidates-create.

It deliberately does not handle the API call itself, so you'll need to handle that yourself. This is so you can handle the API call however you want, and also so you can handle the response however you want.

## Installation

```bash
npm install workable-application-form-react
```

or

```bash
yarn add workable-application-form-react
```

## Usage

See the [examples](./examples) folder for working examples.

```jsx
import React from "react";
import WorkableApplicationForm from "workable-application-form-react";

import { createRoot } from "react-dom/client";

const domNode = document.getElementById("app");
const root = createRoot(domNode);

root.render(
  <WorkableApplicationForm
    onSave={(data, cb) => {
      console.log(data);
      cb();
    }}
    formFields={[]}
    questions={[[]]}
  />,
);
```

## Props

| Name         | Type       | Description                                                                                                                                                                            |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onSave`     | `function` | A function that is called when the form is submitted. It is passed the data from the form and a callback function. The callback function must be called when the API call is complete. |
| `formFields` | `array`    | An array of objects that define the form fields. See [Form Fields](#form-fields) below.                                                                                                |
| `questions`  | `array`    | An array of arrays of objects that define the questions. See [Questions](#questions) below.                                                                                            |
| `config`     | `object`   | An object that defines the configuration. See [Config](#config) below.                                                                                                                 |
| `fieldsets`  | `array`    | An array of objects that define the fieldsets. See [Fieldsets](#fieldsets) below.                                                                                                      |

## Form Fields

A list of form fields as they come from https://workable.readme.io/reference/jobsshortcodeapplication_form

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L14-L24

```typescript
[
  {
    key: "headline",
    label: "Headline",
    type: "string",
    required: false,
    max_length: 255,
  },
  {
    key: "phone",
    label: "Phone",
    type: "string",
    required: true,
    max_length: 255,
  },
];
```

### Questions

A list of questions as they come from https://workable.readme.io/reference/job-questions.

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L40-L60

```typescript
[
  {
    body: "LinkedIn URL",
    type: "short_text",
    required: false,
    id: "3c25",
  },
  {
    body: "Can you answer this question?",
    type: "boolean",
    required: false,
    id: "536a78",
  }
```

## Fieldsets

The workable API does not return fieldsets, even though you can create them through the interface. This means we'll have to manually define fieldsets. To do this add an array of objects with an optional fieldset name and list of fields.

To let the rest of the fields and questions that you don't manually want to define flow in, a special field `...` can be added. If this special value isn't found, the rest of the fields are added at the end of the fieldset.

If no fieldsets are defined, the fields and questions will be added in the order they come in.

```typescript
[
  {
    name: "Personal information",
    fields: ["firstname", "lastname", "email", "headline", "phone", "address"],
  },
  {
    name: "Details",
    fields: ["..."],
  },
  {
    name: "Profile",
    fields: ["education", "experience", "summary", "resume"],
  },
  {
    fields: ["privacy"],
  },
];
```

## Config

### International Telephone Input

The telephone field uses [](https://www.npmjs.com/package/intl-tel-input) under the hood. You can pass the options for that library in the config object.

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L373-L405

### Labels

You can override the labels used in the form by passing a config object with the labels you want to override.
https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L408-L417

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L420-L427

### Icons

You can override the icons used in the form by passing a config object with the icons you want to override.

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L430-L434

## Output

The output of the form is a Workable candidate object.

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L86-L107

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L122-L130

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L143-L149

https://github.com/Aratramba/workable-application-form-react/blob/dc6f256b44f872791d5d61bd3edaa85bbda04392/types.d.ts#L234-L354

## Styling

You can override the colours of the form using CSS variables:

```css
:root {
  --color-primary: #880696;

  --button-color-primary: var(--color-primary);
  --button-color-secondary: #a943b4;
  --button-outline-secondary: rgba(126, 6, 150, 0.2);
  --button-outline-shadow-color-rgb: 131 6 150;

  --border-color: #e0e0e0;
  --border-focus-color: var(--color-primary);
  --border-outline-color: rgba(126, 6, 150, 0.2);

  --toggle-inactive-color: #c7c9cd;
  --toggle-active-color: var(--color-primary);

  --dropzone-label-color: var(--color-primary);
  --dropzone-success-color: rgb(111, 209, 111);
  --dropzone-error-color: rgb(245, 119, 119);
}
```

More custom styling can be done by overriding the styles through css, e.g.

```css
.application-form .form-field__text,
.application-form-dialog .form-field__text {
  border: 1px dashed royalblue;
}
```
