import { cleanValue, cleanFormData, createWorkableCandidate } from "./utils";

test("checkboxes on/off to boolean", () => {
  let value = "on";
  let cleanedValue = cleanValue(value);
  expect(cleanedValue).toEqual(true);

  value = "off";
  cleanedValue = cleanValue(value);
  expect(cleanedValue).toEqual(false);
});

test("empty values undefined", () => {
  let value = "   ";
  let cleanedValue = cleanValue(value);
  expect(cleanedValue).toBeUndefined();
});

test("clean form data", () => {
  const data = {
    string: "String",
    complexArray: JSON.stringify([
      {
        id: 1,
        data: {
          string: { key: "string", value: "string", label: "String" },
          nostring: { key: "nostring", value: "", label: "No string" },
          yes: { key: "yes", value: "on", label: "Yes" },
          no: { key: "no", value: "off", label: "No" },
          yesno: { key: "yesno", value: "", label: "Yes/No" },
        },
      },
    ]),
  };

  const expected = {
    string: "String",
    complexArray: [
      {
        string: "string",
        nostring: undefined,
        yes: true,
        no: false,
        yesno: undefined,
      },
    ],
  };

  const cleanedData = cleanFormData(data);
  expect(cleanedData).toEqual(expected);
});

test("workable candidate output", () => {
  const data = {
    firstname: "Firstname",
    lastname: "Lastname",
    email: "first_last@email.com",
    headline: "Headline",
    phone: 1234567890,
    phone_dialcode: 39,
    address: "123 Main St",
    education: [
      {
        school: "My School",
        degree: "My degree",
        field_of_study: "My field of study",
        start_date: "2023-03-09",
        end_date: "2023-03-16",
      },
      {
        school: "My other school",
        degree: "My other degree",
        field_of_study: "My other field of study",
        start_date: "2019-02-08",
        end_date: "2023-03-01",
      },
    ],
    experience: [
      {
        title: "My Experience",
        company: "My company",
        industry: "My industry",
        summary: "My summary\nis\nvery\nshort",
        current: true,
        start_date: "2023-03-23",
        end_date: "2023-03-30",
      },
    ],
    summary: "This is \nmy summary",
    cover_letter: "This is \nmy cover\nletter",
    CA_3c25: "https://www.linkedin.com",
    "536a78": true,
    "536a78a": "yes",
    "536a78x": "no i can't",
    date: "2023-03-14",
    privacy: true,
  };

  const formFields: WorkableFormField[] = [
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
    {
      key: "address",
      label: "Address",
      type: "string",
      required: false,
    },
    {
      key: "avatar",
      label: "Photo",
      type: "file",
      supported_file_types: ["jpg", "jpeg", "gif", "png"],
      max_file_size: 5242880,
      required: false,
    },
    {
      key: "education",
      label: "Education",
      type: "complex",
      multiple: true,
      required: false,
      fields: [
        {
          key: "school",
          label: "School",
          type: "string",
          required: false,
          max_length: 255,
        },
        {
          key: "degree",
          label: "Degree",
          type: "string",
          required: false,
          max_length: 255,
        },
        {
          key: "field_of_study",
          label: "Field of study",
          type: "string",
          required: false,
          max_length: 255,
        },
        {
          key: "start_date",
          label: "Start date",
          type: "date",
          required: false,
        },
        {
          key: "end_date",
          label: "End date",
          type: "date",
          required: false,
        },
      ],
    },
    {
      key: "experience",
      label: "Experience",
      type: "complex",
      multiple: true,
      required: false,
      fields: [
        {
          key: "title",
          label: "Title",
          type: "string",
          required: false,
          max_length: 255,
        },
        {
          key: "company",
          label: "Company",
          type: "string",
          required: false,
        },
        {
          key: "industry",
          label: "Industry",
          type: "string",
          required: false,
        },
        {
          key: "summary",
          label: "Summary",
          type: "free_text",
          required: false,
        },
        {
          key: "current",
          label: "I currently work here",
          type: "boolean",
          required: false,
        },
        {
          key: "start_date",
          label: "Start date",
          type: "date",
          required: false,
        },
        {
          key: "end_date",
          label: "End date",
          type: "date",
          required: false,
        },
      ],
    },
    {
      key: "summary",
      label: "Summary",
      type: "free_text",
      required: false,
    },
    {
      key: "resume",
      label: "Resume",
      type: "file",
      supported_file_types: ["pdf", "doc", "docx", "odt", "rtf"],
      max_file_size: 5242880,
      required: true,
    },
    {
      key: "cover_letter",
      label: "Cover letter",
      type: "free_text",
      required: false,
    },
  ];

  const questions: WorkableQuestion[] = [
    {
      body: "LinkedIn URL",
      type: "short_text",
      required: false,
      id: "CA_3c25",
    },
    {
      body: "Can you answer this question?",
      type: "boolean",
      required: false,
      id: "536a78",
    },
    {
      body: "Can you answer this question?",
      type: "free_text",
      required: false,
      id: "536a78a",
    },
    {
      body: "Can you answer this question?",
      type: "free_text",
      required: false,
      id: "536a78x",
    },
    {
      id: "date",
      body: "Date",
      type: "date",
      required: false,
    },
    {
      id: "privacy",
      type: "boolean",
      required: true,
      body: {
        type: "span",
        key: null,
        props: {
          children: [
            "I have read, understand and accept the content of the",
            " ",
            {
              type: "a",
              key: null,
              ref: null,
              props: {
                href: "https://google.com",
                target: "_blank",
                children: "Privacy Notice",
              },
              _owner: null,
              _store: {},
            },
            " ",
            "and consent to the processing of my data as part of this application.",
          ],
        },
      },
    },
  ];

  const expected = {
    firstname: "Firstname",
    lastname: "Lastname",
    email: "first_last@email.com",
    headline: "Headline",
    summary: "This is \nmy summary",
    address: "123 Main St",
    phone: "+391234567890",
    cover_letter: "This is \nmy cover\nletter",
    education_entries: [
      {
        school: "My School",
        degree: "My degree",
        field_of_study: "My field of study",
        start_date: "2023-03-09",
        end_date: "2023-03-16",
      },
      {
        school: "My other school",
        degree: "My other degree",
        field_of_study: "My other field of study",
        start_date: "2019-02-08",
        end_date: "2023-03-01",
      },
    ],
    experience_entries: [
      {
        title: "My Experience",
        company: "My company",
        industry: "My industry",
        summary: "My summary\nis\nvery\nshort",
        current: true,
        start_date: "2023-03-23",
        end_date: "2023-03-30",
      },
    ],
    answers: [
      { question_key: "CA_3c25", body: "https://www.linkedin.com" },
      { question_key: "536a78", checked: true },
      { question_key: "536a78a", body: "yes" },
      { question_key: "536a78x", body: "no i can't" },
      { question_key: "date", date: "2023-03-14" },
      { question_key: "privacy", checked: true },
    ],
  };

  const candidate = createWorkableCandidate(data, formFields, questions);
  expect(JSON.stringify(candidate)).toEqual(JSON.stringify(expected));
});
