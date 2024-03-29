import React = require("react");

import { ConfigContext } from "./ConfigContext";
import { Heading } from "./Heading";

type FormProps = {
  children: React.ReactNode;
  onSubmit(
    event: React.FormEvent<HTMLFormElement>,
    cb: (error: string | null) => void,
  ): void;
};

export const Form: React.ComponentType<FormProps> = ({
  children,
  onSubmit,
}) => {
  const [state, setState] = React.useState<
    "initial" | "saving" | "error" | "complete"
  >("initial");

  const [error, setError] = React.useState<string | null>(null);
  const config = React.useContext(ConfigContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setState("saving");
    setError(null);
    onSubmit(event, (error: string | null) => {
      if (error) {
        setError(error);
        setState("error");
      } else {
        setState("complete");
      }
    });
  };

  return (
    <form
      className={`form--${state}`}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {config.labelForm && <Heading as="h1">{config.labelForm}</Heading>}
      {children}
      <p
        className={`form__error ${error ? "enabled" : "disabled"}`}
        onClick={() => setError(null)}
      >
        {error}
      </p>
    </form>
  );
};
