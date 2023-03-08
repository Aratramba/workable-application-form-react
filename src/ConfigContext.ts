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
};

export const ConfigContext = React.createContext(DEFAULT_FORM_CONFIG);
