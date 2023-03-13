import React = require("react");
import "./form.scss";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setState("saving");
    onSubmit(event, (error: string | null) => {
      if (error) {
        setState("error");
      } else {
        setState("complete");
      }
    });
  };

  return (
    <form className={`form--${state}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
