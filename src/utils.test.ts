import { cleanValue, cleanFormData } from "./utils";

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
