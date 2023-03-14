import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./uploadfield.scss";
import { ConfigContext } from "./ConfigContext";

type UploadFieldProps = {
  name: string;
  field: WorkableFormField;
};

export const UploadField: React.ComponentType<UploadFieldProps> = ({
  name,
  field,
}) => {
  const config = useContext(ConfigContext);

  const IS_IMAGE = Boolean(
    field.supported_file_types.filter((x) =>
      ["jpg", "jpeg", "gif", "png"].includes(x),
    ).length,
  );

  const [state, setState] = useState<
    "initial" | "loading" | "error" | "success"
  >("initial");
  const [image, setImage] = useState<null | { preview: string; name: string }>(
    null,
  );
  const [message, setMessage] = useState<string>("");

  const [fileBase64, setFileBase64] = useState<string>("");
  const { acceptedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: field.max_file_size,
    accept: {
      "application/octet-stream": field.supported_file_types.map(
        (ext) => `.${ext}`,
      ),
    },
    onDrop: (acceptedFiles) => {
      setState("loading");

      if (!acceptedFiles.length) {
        setMessage(config.labelDropzoneNoFilesAccepted);
        setState("error");
        return;
      }

      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => {
          reset();
          setMessage(config.labelDropzoneAborted);
          setState("error");
        };
        reader.onerror = () => {
          reset();
          setMessage(config.labelDropzoneError);
          setState("error");
        };
        reader.onload = () => {
          setFileBase64(reader.result.toString());
          setState("success");
        };
        reader.readAsDataURL(file);
      });

      setImage(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        )[0],
      );
    },
  });

  const reset = () => {
    if (image) URL.revokeObjectURL(image.preview);
    setFileBase64("");
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => reset();
  }, []);

  const onClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    acceptedFiles.length = 0;
    acceptedFiles.splice(0, acceptedFiles.length);
    inputRef.current.value = "";
    setImage(null);
    setState("initial");
    setMessage("");
  };

  return (
    <>
      <button
        type="button"
        data-action="remove-entry"
        onClick={onClear}
        style={{ display: "none" }}
      />
      <div {...getRootProps({ className: "dropzone" })} data-state={state}>
        <input {...getInputProps()} />
        <textarea
          name={name}
          style={{ display: "none" }}
          value={fileBase64}
          readOnly
        />

        {acceptedFiles.length > 0 ? (
          <>
            {IS_IMAGE && image && (
              <img
                style={{
                  maxWidth: 240,
                }}
                key={image.name}
                src={image.preview}
                onLoad={() => {
                  URL.revokeObjectURL(image.preview);
                }}
              />
            )}
            {!IS_IMAGE &&
              acceptedFiles.map((file) => <p key={file.name}>{file.name}</p>)}
            <p className="dropzone__label">
              <span>{config.labelDropzoneReplaceFile}</span>{" "}
              {config.labelDropzoneDragDrop}
            </p>
          </>
        ) : (
          <>
            <p className="dropzone__label">
              <span>{config.labelDropzoneUpload}</span>{" "}
              {config.labelDropzoneDragDrop}
            </p>
            <p className="dropzone__info">
              {field.max_file_size &&
                `${config.labelDropzoneMaxSize} ${Math.floor(
                  field.max_file_size / 1000000,
                )}Mb. Acceptable file types .
              ${field.supported_file_types.join(", .")}.`}
            </p>
          </>
        )}

        {state === "loading" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
                .spinner_b2T7{animation:spinner_xe7Q .8s linear infinite}.spinner_YRVV{animation-delay:-.65s}.spinner_c9oY{animation-delay:-.5s}@keyframes spinner_xe7Q{93.75%,100%{r:3px}46.875%{r:.2px}}`,
              }}
            />
            <circle className="spinner_b2T7" cx="4" cy="12" r="3" />
            <circle
              className="spinner_b2T7 spinner_YRVV"
              cx="12"
              cy="12"
              r="3"
            />
            <circle
              className="spinner_b2T7 spinner_c9oY"
              cx="20"
              cy="12"
              r="3"
            />
          </svg>
        )}

        {message && <p className="dropzone__message">{message}</p>}
      </div>
    </>
  );
};

export default UploadField;
