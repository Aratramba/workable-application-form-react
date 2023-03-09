import { useContext, useReducer, useRef, useState } from "react";
import { Field } from "./Field";
import { Row } from "./Row";
import { ConfigContext } from "./ConfigContext";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type AddMultipleComplexProps = {
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

export const AddMultipleComplex: React.ComponentType<
  AddMultipleComplexProps
> = ({ name, field }) => {
  const config = useContext(ConfigContext);
  const [state, setState] = useState<"initial" | "dialog">("initial");

  const formRef = useRef<HTMLFormElement>(null);

  const hiddenValueFieldRef = useRef<HTMLInputElement>(null);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);

  const entryId = useRef<number>(0);

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
      if (key.startsWith(`${name}:`)) {
        const subkey = key.replace(`${name}:`, "");
        const matchingField = field.fields.find((f) => f.key === subkey);

        if (!value.trim().length) return;
        action.data[subkey] = {
          key: subkey,
          value,
          label: matchingField.label,
        };
      }
    });
    updateEntries(action);
    setState("initial");
    setEditingEntryId(null);
  };

  return (
    <Dialog.Root open={state === "dialog"}>
      <div className="field-label">{field.label}</div>

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
        <div className="add-multiple-complex">
          {(entries as ActionType[]).map((entry) => {
            return (
              <div key={entry.id} className="add-multiple-complex-entry">
                {Object.entries(entry.data).map(
                  ([key, value]: [string, FieldValueType]) => (
                    <div key={key}>
                      {value.value === "on" ? (
                        <>
                          {config.iconCheck} {value.label}
                        </>
                      ) : (
                        <>
                          {value.label}: {value.value}
                        </>
                      )}
                    </div>
                  ),
                )}

                <div className="add-multiple-complex-buttons">
                  <button
                    type="button"
                    className="button button-edit"
                    onClick={() => {
                      setEditingEntryId(entry.id);
                      setState("dialog");
                    }}
                  >
                    {config.iconEdit()}
                    <VisuallyHidden.Root>
                      {config.labelEdit}
                    </VisuallyHidden.Root>
                  </button>

                  <button
                    type="button"
                    className="button button-delete"
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
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="add-multiple-complex-add">
        <button
          type="button"
          className="button button-save"
          onClick={() => setState("dialog")}
        >
          {config.labelAdd}
        </button>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent application-form">
          <VisuallyHidden.Root asChild>
            <Dialog.Title className="DialogTitle">
              {editingEntryId ? config.labelEdit : config.labelAdd}
            </Dialog.Title>
          </VisuallyHidden.Root>

          <button
            className="DialogClose"
            aria-label={config.labelClose}
            onClick={() => setState("initial")}
          >
            {config.iconCancel()}
          </button>

          <form className="add-multiple-complex-form" ref={formRef}>
            {field.fields.map(({ key }) => {
              const editingEntry = structuredClone(
                entries.find(({ id }) => id === editingEntryId),
              );

              function getSubFieldProps(key) {
                const subfield = field.fields.find(
                  (subfield) => subfield.key === key,
                );
                return {
                  key: subfield.key,
                  name: `${name}:${subfield.key}`,
                  field: {
                    ...subfield,
                    name: `${name}:${subfield.key}`,
                    label: subfield.label,
                    slug: subfield.key,
                    value:
                      editingEntryId && editingEntry
                        ? editingEntry.data[subfield.key]?.value
                        : null,
                  },
                };
              }

              if (!["start_date", "end_date"].includes(key)) {
                return (
                  <Row key={key}>
                    <Field {...getSubFieldProps(key)} />
                  </Row>
                );
              }

              if (key === "start_date") {
                return (
                  <Row key={key}>
                    <Field {...getSubFieldProps("start_date")} />
                    <Field {...getSubFieldProps("end_date")} />
                  </Row>
                );
              }

              return null;
            })}

            <div className="button-row">
              <button
                type="button"
                className="button button-save"
                onClick={() => onSave()}
              >
                {config.labelSave}
              </button>

              <button
                type="button"
                className="button button-cancel"
                onClick={() => {
                  setEditingEntryId(null);
                  setState("initial");
                }}
              >
                {config.labelCancel}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddMultipleComplex;
