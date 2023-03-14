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
