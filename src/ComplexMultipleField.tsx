import { useContext, useReducer, useRef, useState } from "react";
import { Field } from "./Field";
import { ConfigContext } from "./ConfigContext";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Fieldset } from "./Fieldset";
import { Button } from "./Button";

import "./complexmultiple.scss";

type ComplexMultipleProps = {
  name: string;
  field: WorkableFormField;
};

type ActionType = {
  id: string;
  type: "add" | "remove" | "edit";
  data?: Record<string, FieldValueType>;
};

type FieldValueType = {
  key: string;
  value: string;
  label: string;
};

export const ComplexMultiple: React.ComponentType<ComplexMultipleProps> = ({
  name,
  field,
}) => {
  const config = useContext(ConfigContext);
  const [state, setState] = useState<"initial" | "dialog">("initial");

  const formRef = useRef<HTMLFormElement>(null);

  const hiddenValueFieldRef = useRef<HTMLInputElement>(null);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);

  const entryId = useRef<number>(0);

  /**
   * entries is an array of objects that looks like this:
   * [{
   *  id: "entry-1",
   *  type: "add",
   *  data: {
   *  "entry-1": {
   *    key: "firstname",
   *    value: "John",
   *    label: "First Name"
   * }]
   */

  const [entries, updateEntries] = useReducer((data, action: ActionType) => {
    const index = data.findIndex(({ id }) => id === action.id);
    let newData = [...data];

    switch (action.type) {
      case "add":
        return [...data, action];

      case "remove":
        newData.splice(index, 1);
        return newData;

      case "edit":
        newData.splice(index, 1, action);
        return newData;
    }
  }, []);

  /**
   * Save when the 'save' button is clicked
   * it can either be a 'save' or an 'edit' action
   */

  const onSave = () => {
    if (!hiddenValueFieldRef.current) return;
    if (!formRef) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const action: ActionType = !editingEntryId
      ? {
          id: `entry-${++entryId.current}`,
          type: "add",
          data: {},
        }
      : {
          id: editingEntryId,
          type: "edit",
          data: {},
        };

    Object.entries(data).forEach(([key, value]: [string, string]) => {
      const matchingField = field.fields.find((f) => f.key === key);

      if (!value.trim().length) return;
      action.data[key] = {
        key: key,
        value,
        label: matchingField.label,
      };
    });
    updateEntries(action);
    setState("initial");
    setEditingEntryId(null);
  };

  return (
    <>
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(entries)}
        ref={hiddenValueFieldRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateEntries(JSON.parse(e.target.value))
        }
      />
      {Boolean(entries.length) && (
        <div className="complex-multiple__entries">
          {(entries as ActionType[]).map((entry) => {
            return (
              <div key={entry.id} className="complex-multiple__entry">
                <table className="complex-multiple__entry-table">
                  <tbody>
                    {Object.entries(entry.data).map(
                      ([key, value]: [string, FieldValueType]) => (
                        <tr key={key}>
                          <th>{value.label}</th>
                          {value.value === "on" ? (
                            <td>{config.iconCheck()}</td>
                          ) : (
                            <td>{value.value}</td>
                          )}
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>

                <div className="complex-multiple__entry-actions">
                  <Button
                    type="button"
                    theme="ghost"
                    onClick={() => {
                      setEditingEntryId(entry.id);
                      setState("dialog");
                    }}
                  >
                    {config.iconEdit()}
                    <VisuallyHidden.Root>
                      {config.labelEdit}
                    </VisuallyHidden.Root>
                  </Button>

                  <Button
                    type="button"
                    theme="ghost"
                    data-action="remove-entry"
                    onClick={() =>
                      updateEntries({
                        id: entry.id,
                        type: "remove",
                      })
                    }
                  >
                    {config.iconDelete()}
                    <VisuallyHidden.Root>
                      {config.labelDelete}
                    </VisuallyHidden.Root>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="complex-multiple__add">
        <Button type="button" onClick={() => setState("dialog")}>
          {config.labelAdd}
        </Button>
      </div>

      <Dialog.Root open={state === "dialog"}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content
            className="dialog-content application-form-dialog"
            onEscapeKeyDown={() => setState("initial")}
            onPointerDownOutside={() => setState("initial")}
            onInteractOutside={() => setState("initial")}
          >
            <div className="dialog-content__form">
              <VisuallyHidden.Root asChild>
                <Dialog.Title className="dialog-title">
                  {editingEntryId ? config.labelEdit : config.labelAdd}
                </Dialog.Title>
              </VisuallyHidden.Root>

              <Button
                aria-label={config.labelClose}
                onClick={() => setState("initial")}
                theme="tertiary"
                className="dialog-content__close"
              >
                {config.iconCancel()}
              </Button>

              <form className="complex-multiple__form" ref={formRef}>
                <Fieldset name={field.label} displayClearButton={false}>
                  {field.fields.map((subfield) => {
                    const editingEntry = structuredClone(
                      entries.find(({ id }) => id === editingEntryId),
                    );

                    return (
                      <Field
                        key={subfield.key}
                        name={subfield.key}
                        field={{
                          ...subfield,
                          name: subfield.key,
                          label: subfield.label,
                          slug: subfield.key,
                          value:
                            editingEntryId && editingEntry
                              ? editingEntry.data[subfield.key]?.value
                              : null,
                        }}
                      />
                    );
                  })}

                  <div className="button-row">
                    <Button type="button" onClick={() => onSave()}>
                      {config.labelSave}
                    </Button>

                    <Button
                      type="button"
                      theme="tertiary"
                      onClick={() => {
                        setEditingEntryId(null);
                        setState("initial");
                      }}
                    >
                      {config.labelCancel}
                    </Button>
                  </div>
                </Fieldset>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ComplexMultiple;
