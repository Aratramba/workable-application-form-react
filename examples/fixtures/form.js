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
  ],
  questions: [
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
      max_length: 100,
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
  ],
};