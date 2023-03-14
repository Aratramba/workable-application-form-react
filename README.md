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

```typescript
key: string;
label: string;
type: "string" | "free_text" | "file" | "boolean" | "date" | "complex";
required: boolean;
fields?: WorkableFormField[];
supported_file_types?: string[];
max_file_size?: number;
multiple?: boolean;
max_length?: number;
```

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

```typescript
id: string;
body: string | React.ReactNode;
type:
  | "short_text"
  | "free_text"
  | "multiple_choice"
  | "boolean"
  | "dropdown"
  | "numeric"
  | "date"
  | "file";
required?: boolean;
single_answer?: boolean;
choices?: {
  id: string;
  body: string;
}[];
supported_file_types?: string[];
max_file_size?: number;
```

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

```typescript
telephoneInitialCountry?: string;
telephonePreferredCountries?: string[];
telephoneAllowDropdown?: boolean;
telephoneAutoHideDialCode?: boolean;
telephoneAutoPlaceholder?: "polite" | "aggressive" | "off";
telephoneCustomContainer?: string;
telephoneCustomPlaceholder?: (
selectedCountryPlaceholder,
selectedCountryData,
) => string | null;
telephoneDropdownContainer?: HTMLElement | null;
telephoneExcludeCountries?: string[];
telephoneFormatOnDisplay?: boolean;
telephoneGeoIpLookup?: (success, failure) => string;
telephoneHiddenInput?: string;
telephoneLocalizedCountries?: { [key: string]: string };
telephoneNationalMode?: boolean;
telephoneOnlyCountries?: string[];
telephonePlaceholderNumberType?:
| "FIXED_LINE"
| "MOBILE"
| "FIXED_LINE_OR_MOBILE"
| "TOLL_FREE"
| "PREMIUM_RATE"
| "SHARED_COST"
| "VOIP"
| "PERSONAL_NUMBER"
| "PAGER"
| "UAN"
| "VOICEMAIL"
| "UNKNOWN";
telephoneSeparateDialCode?: boolean;
```

### Labels

You can override the labels used in the form by passing a config object with the labels you want to override.

```typescript

labelForm?: string;
labelSubmit?: string;
labelAdd?: string;
labelSave?: string;
labelCancel?: string;
labelEdit?: string;
labelDelete?: string;
labelClose?: string;
labelOptional?: string;
labelClear?: string;

// dropzone
labelDropzoneUpload?: string;
labelDropzoneDragDrop?: string;
labelDropzoneMaxSize?: string;
labelDropzoneAcceptableFileTypes?: string;
labelDropzoneReplaceFile?: string;
labelDropzoneNoFilesAccepted?: string;
labelDropzoneAborted?: string;
labelDropzoneError?: string;
```

### Icons

You can override the icons used in the form by passing a config object with the icons you want to override.

```typescript

// icons
iconCancel?: () => JSX.Element;
iconCheck?: () => JSX.Element;
iconDelete?: () => JSX.Element;
iconEdit?: () => JSX.Element;
iconClear?: () => JSX.Element;
};

```

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
