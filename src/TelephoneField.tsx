type TelephoneFieldProps = {
  name: string;
  field: WorkableFormField;
};

import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { useContext, useEffect, useRef } from "react";
import { ConfigContext } from "./ConfigContext";

export const TelephoneField: React.ComponentType<TelephoneFieldProps> = ({
  name,
  field,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const config = useContext(ConfigContext);

  useEffect(() => {
    if (!inputRef.current) return;

    const iti = intlTelInput(inputRef.current, {
      initialCountry: config.telephoneInitialCountry,
      allowDropdown: config.telephoneAllowDropdown,
      autoHideDialCode: config.telephoneAutoHideDialCode,
      autoPlaceholder: config.telephoneAutoPlaceholder,
      customContainer: config.telephoneCustomContainer,
      customPlaceholder: config.telephoneCustomPlaceholder,
      dropdownContainer: config.telephoneDropdownContainer,
      excludeCountries: config.telephoneExcludeCountries,
      formatOnDisplay: config.telephoneFormatOnDisplay,
      geoIpLookup: config.telephoneGeoIpLookup,
      hiddenInput: config.telephoneHiddenInput,
      localizedCountries: config.telephoneLocalizedCountries,
      nationalMode: config.telephoneNationalMode,
      onlyCountries: config.telephoneOnlyCountries,
      placeholderNumberType: config.telephonePlaceholderNumberType,
      preferredCountries: config.telephonePreferredCountries,
      separateDialCode: config.telephoneSeparateDialCode,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    });

    () => iti.destroy();
  }, []);

  return <input type="tel" ref={inputRef} name={name} />;
};