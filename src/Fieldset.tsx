import { useContext, useRef } from "react";
import { Button } from "./Button";
import { ConfigContext } from "./ConfigContext";
import "./fieldset.scss";

type FieldsetProps = {
  name?: string;
  children: React.ReactNode;
  displayClearButton?: boolean;
};
export const Fieldset: React.ComponentType<FieldsetProps> = ({
  name,
  children,
  displayClearButton = true,
}) => {
  const config = useContext(ConfigContext);
  const fieldsetRef = useRef(null);

  const onClear = () => {
    const inputs = fieldsetRef.current.querySelectorAll(
      "input, textarea, select",
    );

    inputs.forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      } else {
        input.value = "";
      }
      input.dispatchEvent(new Event("change"));
    });

    const removeComplexMultipleEntries = fieldsetRef.current.querySelectorAll(
      '[data-action="remove-entry"]',
    );
    removeComplexMultipleEntries.forEach((button) => {
      button.click();
    });
  };

  return (
    <fieldset className="form-fieldset" ref={fieldsetRef}>
      {name && (
        <legend className="form-legend">
          <span className="form-legend__title">{name}</span>
          {displayClearButton && (
            <span className="form-legend__clear">
              <Button type="button" theme="ghost" onClick={onClear}>
                {config.iconClear()}
                {config.labelClear}
              </Button>
            </span>
          )}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
