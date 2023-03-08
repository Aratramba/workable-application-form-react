import { useContext, useReducer, useRef, useState } from "react";
import { Field } from "./Field";
import { Row } from "./Row";
import { ConfigContext } from "./ConfigContext";

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

  const hiddenValueFieldRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<"form" | "display">("display");
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

  const HiddenValueField = () => (
    <input
      type="hidden"
      name={name}
      value={JSON.stringify(entries)}
      ref={hiddenValueFieldRef}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        updateEntries(JSON.parse(e.target.value))
      }
    />
  );

  if (state === "display") {
    return (
      <div>
        <div className="field-label">{name}</div>

        <HiddenValueField />

        {Boolean(entries.length) && (
          <div className="add-multiple-complex">
            {(entries as ActionType[]).map((entry) => {
              return (
                <div key={entry.id}>
                  {Object.entries(entry.data).map(
                    ([key, value]: [string, FieldValueType]) => (
                      <div key={key}>
                        {value.label}: {value.value}
                      </div>
                    ),
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setEditingEntryId(entry.id);
                      setState("form");
                    }}
                  >
                    {config.labelEdit}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      updateEntries({
                        id: entry.id,
                        type: "remove",
                      })
                    }
                  >
                    {config.labelDelete}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div>
          <button
            type="button"
            className="button button-save"
            onClick={() => setState("form")}
          >
            {config.labelAdd}
          </button>
        </div>
      </div>
    );
  }

  const onSave = () => {
    if (!hiddenValueFieldRef.current) return;

    const formRef = hiddenValueFieldRef.current.form;
    if (!formRef) return;

    const formData = new FormData(formRef);
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
        action.data[subkey] = {
          key: subkey,
          value,
          label: matchingField.label,
        };
      }
    });
    updateEntries(action);

    setEditingEntryId(null);
    setState("display");
  };

  return (
    <div>
      <div className="field-label">{name}</div>
      <HiddenValueField />
      <div className="add-multiple-complex">
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
              setState("display");
              setEditingEntryId(null);
            }}
          >
            {config.labelCancel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMultipleComplex;
