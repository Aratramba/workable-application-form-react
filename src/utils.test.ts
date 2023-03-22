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
          string: { id: "string", value: "string", label: "String" },
          nostring: { id: "nostring", value: "", label: "No string" },
          yes: { id: "yes", value: "on", label: "Yes" },
          no: { id: "no", value: "off", label: "No" },
          yesno: { id: "yesno", value: "", label: "Yes/No" },
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

  const formFields: WorkableField[] = [
    {
      id: "firstname",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      id: "lastname",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      id: "headline",
      label: "Headline",
      type: "text",
      required: false,
      maxLength: 255,
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      required: true,
      maxLength: 255,
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      required: false,
    },
    {
      id: "avatar",
      label: "Photo",
      type: "file",
      supportedFileTypes: ["jpg", "jpeg", "gif", "png"],
      maxFileSize: 5242880,
      required: false,
    },
    {
      id: "education",
      label: "Education",
      type: "group",
      required: false,
      fields: [
        {
          id: "school",
          label: "School",
          type: "text",
          required: false,
          maxLength: 255,
        },
        {
          id: "degree",
          label: "Degree",
          type: "text",
          required: false,
          maxLength: 255,
        },
        {
          id: "field_of_study",
          label: "Field of study",
          type: "text",
          required: false,
          maxLength: 255,
        },
        {
          id: "start_date",
          label: "Start date",
          type: "date",
          required: false,
        },
        {
          id: "end_date",
          label: "End date",
          type: "date",
          required: false,
        },
      ],
    },
    {
      id: "experience",
      label: "Experience",
      type: "group",
      required: false,
      fields: [
        {
          id: "title",
          label: "Title",
          type: "text",
          required: false,
          maxLength: 255,
        },
        {
          id: "company",
          label: "Company",
          type: "text",
          required: false,
        },
        {
          id: "industry",
          label: "Industry",
          type: "text",
          required: false,
        },
        {
          id: "summary",
          label: "Summary",
          type: "paragraph",
          required: false,
        },
        {
          id: "current",
          label: "I currently work here",
          type: "boolean",
          required: false,
        },
        {
          id: "start_date",
          label: "Start date",
          type: "date",
          required: false,
        },
        {
          id: "end_date",
          label: "End date",
          type: "date",
          required: false,
        },
      ],
    },
    {
      id: "summary",
      label: "Summary",
      type: "paragraph",
      required: false,
    },
    {
      id: "resume",
      label: "Resume",
      type: "file",
      supportedFileTypes: ["pdf", "doc", "docx", "odt", "rtf"],
      maxFileSize: 5242880,
      required: true,
    },
    {
      id: "cover_letter",
      label: "Cover letter",
      type: "paragraph",
      required: false,
    },
    {
      label: "LinkedIn URL",
      type: "text",
      required: false,
      id: "CA_3c25",
    },
    {
      label: "Can you answer this question?",
      type: "boolean",
      required: false,
      id: "536a78",
    },
    {
      label: "Can you answer this question?",
      type: "paragraph",
      required: false,
      id: "536a78a",
    },
    {
      label: "Can you answer this question?",
      type: "paragraph",
      required: false,
      id: "536a78x",
    },
    {
      id: "date",
      label: "Date",
      type: "date",
      required: false,
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
    ],
  };

  const candidate = createWorkableCandidate(data, formFields);
  expect(JSON.stringify(candidate)).toEqual(JSON.stringify(expected));
});
