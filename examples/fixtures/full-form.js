export default {
  form_fields: [
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
      required: false,
      max_length: 255,
    },
    { key: "address", label: "Address", type: "string", required: false },
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
        { key: "end_date", label: "End date", type: "date", required: false },
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
        { key: "end_date", label: "End date", type: "date", required: false },
      ],
    },
    { key: "summary", label: "Summary", type: "free_text", required: false },
    {
      key: "resume",
      label: "Resume",
      type: "file",
      supported_file_types: ["pdf", "doc", "docx", "odt", "rtf"],
      max_file_size: 5242880,
      required: false,
    },
    {
      key: "cover_letter",
      label: "Cover letter",
      type: "free_text",
      required: false,
    },
  ],
  questions: [
    {
      body: "Paragraph: Can you answer this question?",
      type: "free_text",
      required: true,
      id: "5dc1d4",
    },
    {
      body: "Short answer: Can you answer this question?",
      type: "short_text",
      required: true,
      id: "5dc1d5",
    },
    {
      body: "Yes no: Can you answer this question?",
      type: "boolean",
      required: true,
      id: "5dc1d6",
    },
    {
      body: "Dropdown: Can you answer this question?",
      type: "dropdown",
      required: true,
      single_answer: true,
      choices: [
        { body: "one", id: "2c9487" },
        { body: "two", id: "2c9488" },
        { body: "three", id: "2c9489" },
      ],
      id: "5dc1d7",
    },
    {
      body: "Multiple choice: Can you answer this question?",
      type: "multiple_choice",
      required: true,
      single_answer: false,
      choices: [
        { body: "one", id: "2c948a" },
        { body: "two", id: "2c948b" },
        { body: "three", id: "2c948c" },
      ],
      id: "5dc1d8",
    },
    {
      body: "Multiple choice (max 1): Can you answer this question?",
      type: "multiple_choice",
      required: true,
      single_answer: true,
      choices: [
        { body: "one", id: "2c948d" },
        { body: "two", id: "2c948e" },
        { body: "three", id: "2c948f" },
      ],
      id: "5dc1d9",
    },
    {
      body: "Date: Can you answer this question?",
      type: "date",
      required: true,
      id: "5dc1da",
    },
    {
      body: "Number: Can you answer this question?",
      type: "numeric",
      required: true,
      id: "5dc1db",
    },
    {
      body: "Upload: Can you answer this question?",
      type: "file",
      required: true,
      supported_file_types: [
        "pdf",
        "doc",
        "docx",
        "odt",
        "rtf",
        "ppt",
        "pptx",
        "png",
        "jpg",
        "jpeg",
        "gif",
        "tiff",
        "xlsx",
        "xls",
        "zip",
      ],
      max_file_size: 20971520,
      id: "5dc1dc",
    },
  ],
};