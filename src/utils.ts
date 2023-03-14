/**
 * Clean form data
 * - checkboxes are stored as "on" or "off"
 * - complex fields are stored as json
 */

export const cleanFormData = (data: any) => {
  const cleanedData: any = {};
  Object.keys(data).forEach((key) => {
    let value = data[key];

    // parse complex fields that are already stored as json
    try {
      value = JSON.parse(value);
    } catch (e) {}

    // arrays
    if (Array.isArray(value)) {
      cleanedData[key] = value.map((item) => {
        if (typeof item === "object" && item !== null) {
          if ("value" in value) {
            return cleanValue(value.value);
          }

          if ("data" in item) {
            const cleanedData: any = {};
            Object.keys(item.data).forEach((key) => {
              cleanedData[key] = cleanValue(item.data[key].value);
            });
            return cleanedData;
          }

          return cleanFormData(item);
        }
        return cleanValue(item);
      });
      return;
    }

    cleanedData[key] = cleanValue(value);
  });

  return cleanedData;
};

/**
 * Clean value
 * - empty values are removed
 * - checkboxes are stored as boolean
 */

export const cleanValue = (value: any) => {
  // empty values
  if (typeof value === "string" && value.trim().length === 0) {
    return;
  }

  // checkboxes
  if (value === "on" || value === "off") {
    return value === "on" ? true : false;
  }

  return value;
};

/**
 * Create workable candidate from form data
 * based on field types in formFields and questions
 */

export const createWorkableCandidate = (
  data: any,
  formFields: WorkableFormField[],
  questions: WorkableQuestion[],
) => {
  const candidate: WorkableCandidate = {
    name: data.name,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    headline: data.headline,
    summary: data.summary,
    address: data.address,
    phone: `+${data.phone_dialcode}${data.phone}`,
    cover_letter: data.cover_letter,
    education_entries: data.education,
    experience_entries: data.experience,
    answers: [],
    skills: data.skills,
    tags: data.tags,
    disqualified: data.disqualified,
    disqualification_reason: data.disqualification_reason,
    disqualified_at: data.disqualified_at,
    social_profiles: data.social_profiles,
    domain: data.domain,
    recruiter_key: data.recruiter_key,
  };

  // find form fields that are not yet in the object
  const missingFields = formFields.filter(
    (field) => !Object.keys(candidate).includes(field.key),
  );

  // add answers
  missingFields.forEach((question) => {
    const value = data[question.key];

    if (value) {
      // "string" | "free_text" | "file" | "boolean" | "date" | "complex"
      switch (question.type) {
        case "string":
          const stringAnswer: WorkableAnswerFreeText = {
            question_key: question.key,
            body: value,
          };
          candidate.answers.push(stringAnswer);
          break;

        case "free_text":
          const freetextAnswer: WorkableAnswerFreeText = {
            question_key: question.key,
            body: value,
          };
          candidate.answers.push(freetextAnswer);
          break;

        case "boolean":
          const booleanAnswer: WorkableAnswerBoolean = {
            question_key: question.key,
            checked: value,
          };
          candidate.answers.push(booleanAnswer);
          break;

        case "date":
          const dateAnswer: WorkableAnswerDate = {
            question_key: question.key,
            date: value,
          };
          candidate.answers.push(dateAnswer);
          break;

        case "file":
          const fileAnswer: WorkableAnswerFileData = {
            question_key: question.key,
            data: value,
          };
          candidate.answers.push(fileAnswer);
          break;

        // not covering the complex case here, as experience and education are handled separately
      }
    }
  });

  // find questions that are not yet in the object
  const missingQuestions = questions.filter(
    (question) => !Object.keys(candidate).includes(question.id),
  );

  // add answers;
  missingQuestions.forEach((question) => {
    const value = data[question.id];

    if (value) {
      // "free_text" | "multiple_choice" | "boolean" | "dropdown" | "numeric" | "date" | "file";
      switch (question.type) {
        case "free_text":
          const freetextAnswer: WorkableAnswerFreeText = {
            question_key: question.id,
            body: value,
          };
          candidate.answers.push(freetextAnswer);
          break;

        case "multiple_choice":
          const multipleChoiceAnswer: WorkableAnswerMultipleChoice = {
            question_key: question.id,
            choices: value,
          };
          candidate.answers.push(multipleChoiceAnswer);
          break;

        case "boolean":
          const booleanAnswer: WorkableAnswerBoolean = {
            question_key: question.id,
            checked: value,
          };
          candidate.answers.push(booleanAnswer);
          break;

        case "dropdown":
          const dropdownAnswer: WorkableAnswerDropdown = {
            question_key: question.id,
            choices: value,
          };
          candidate.answers.push(dropdownAnswer);
          break;

        case "date":
          const dateAnswer: WorkableAnswerDate = {
            question_key: question.id,
            date: value,
          };
          candidate.answers.push(dateAnswer);
          break;

        case "numeric":
          const numericAnswer: WorkableAnswerNumeric = {
            question_key: question.id,
            value: +value,
          };
          candidate.answers.push(numericAnswer);
          break;

        case "file":
          const fileAnswer: WorkableAnswerFileData = {
            question_key: question.id,
            data: value,
          };
          candidate.answers.push(fileAnswer);
          break;
      }
    }
  });

  console.log(candidate);

  // remove undefined values
  Object.keys(candidate).forEach((key) =>
    candidate[key] === undefined ? delete candidate[key] : {},
  );

  return candidate;
};
