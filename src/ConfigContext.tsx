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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
    >
      <path
        d="M7.7574 7.7574 12 12.0001m0 0 4.2426 4.2426M12 12.0001l4.2426-4.2427M12 12.0001l-4.2426 4.2426"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  iconCheck: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
    >
      <path
        d="M6.5 12.5 10 16l7.5-7.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  iconEdit: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M9 6.75H4.75v12.5h12.5V15"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M17.5 4.25l-7.25 7.25v2.75H13l7.24-7.26 -2.75-2.75Z"
      ></path>
    </svg>
  ),
  iconDelete: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"
      ></path>
    </svg>
  ),
};

export const ConfigContext = React.createContext(DEFAULT_FORM_CONFIG);
