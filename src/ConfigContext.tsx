import React = require("react");

export const DEFAULT_FORM_CONFIG: FormConfigType = {
  telephoneInitialCountry: "US",
  telephonePreferredCountries: ["us", "gb", "ca", "de", "au"],
  telephoneAllowDropdown: true,
  telephoneAutoHideDialCode: false,
  telephoneAutoPlaceholder: "polite",
  telephoneCustomContainer: "",
  telephoneCustomPlaceholder: null,
  telephoneDropdownContainer: null,
  telephoneExcludeCountries: [],
  telephoneFormatOnDisplay: true,
  telephoneGeoIpLookup: null,
  telephoneHiddenInput: "",
  telephoneLocalizedCountries: null,
  telephoneNationalMode: false,
  telephoneOnlyCountries: [],
  telephonePlaceholderNumberType: "MOBILE",
  telephoneSeparateDialCode: true,

  // labels
  labelForm: "Application",
  labelSubmit: "Submit application",
  labelAdd: "Add",
  labelSave: "Save",
  labelCancel: "Cancel",
  labelEdit: "Edit",
  labelDelete: "Delete",
  labelClose: "Close",
  labelOptional: "(optional)",

  // icons
  iconCancel: () => (
    <svg
      width={24}
      height={24}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  iconCheck: () => (
    <svg
      width={24}
      height={24}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  iconEdit: () => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M14.363 5.652l1.48-1.48a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.828l-1.48 1.48m-4.243-4.242l-9.616 9.615a2 2 0 00-.578 1.238l-.242 2.74a1 1 0 001.084 1.085l2.74-.242a2 2 0 001.24-.578l9.615-9.616m-4.243-4.242l4.243 4.242"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  iconDelete: () => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
};

export const ConfigContext = React.createContext(DEFAULT_FORM_CONFIG);
