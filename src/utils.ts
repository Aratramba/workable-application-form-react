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
  const obj: WorkableCandidate = {
    name: data.name,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    headline: data.headline,
    summary: data.summary,
    address: data.address,
    phone: data.phone,
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

  // add answers;

  // remove undefined values
  Object.keys(obj).forEach((key) =>
    obj[key] === undefined ? delete obj[key] : {},
  );

  return obj;
};
