type TelephoneFieldProps = {} & FormFieldType;

import intlTelInput from "intl-tel-input";
import { useContext, useEffect, useRef, useState } from "react";
import { ConfigContext } from "./ConfigContext";
import { FormField } from "./FormField";

export const TelephoneField: React.ComponentType<TelephoneFieldProps> = ({
  name,
  required,
  id,
  defaultValue,
  maxLength,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const config = useContext(ConfigContext);
  const [dialCode, setDialCode] = useState<string>("");

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

    const onCountryChange = () => {
      const countryData = iti.getSelectedCountryData();
      setDialCode(countryData.dialCode);
    };

    onCountryChange();
    inputRef.current.addEventListener("countrychange", onCountryChange);

    () => {
      iti.destroy();
      inputRef.current.removeEventListener("countrychange", onCountryChange);
    };
  }, []);

  return (
    <FormField>
      <input
        type="tel"
        ref={inputRef}
        name={name}
        required={required}
        id={id}
        defaultValue={defaultValue}
        maxLength={maxLength}
        className="form-field__text form-field__telephone"
      />
      <input
        type="hidden"
        name={`${name}_dialcode`}
        value={dialCode}
        readOnly
      />
    </FormField>
  );
};

export default TelephoneField;
