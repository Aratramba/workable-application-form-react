import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { ConfigContext } from "./ConfigContext";

export type UploadFieldProps = {
  onAvatarUpload?: (file: File) => Promise<string | { error: string }>;
  onFileUpload?: (file: File) => Promise<string | { error: string }>;
} & WorkableField;

export const UploadField: React.ComponentType<UploadFieldProps> = ({
  id,
  supportedFileTypes,
  maxFileSize,
  onAvatarUpload = () => "",
  onFileUpload = () => "",
}) => {
  const config = useContext(ConfigContext);

  const IS_IMAGE = Boolean(
    supportedFileTypes.filter((x) => ["jpg", "jpeg", "gif", "png"].includes(x))
      .length,
  );

  const [state, setState] = useState<
    "initial" | "loading" | "error" | "success"
  >("initial");
  const [image, setImage] = useState<null | { preview: string; name: string }>(
    null,
  );
  const [message, setMessage] = useState<string>("");

  const [fileURL, setFileURL] = useState<string>("");
  const { acceptedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: maxFileSize,
    accept: {
      "application/octet-stream": supportedFileTypes.map((ext) => ext),
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
        reader.onload = async () => {
          const uploadedFile =
            id === "avatar"
              ? await onAvatarUpload(file)
              : await onFileUpload(file);

          if (typeof uploadedFile !== "string" && "error" in uploadedFile) {
            setMessage(uploadedFile.error);
            setState("error");
          } else {
            setFileURL(uploadedFile);
            setState("success");
          }
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
    setFileURL("");
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
        <input name={id} type="hidden" value={fileURL} readOnly />

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
              {maxFileSize &&
                `${config.labelDropzoneMaxSize} ${Math.floor(
                  maxFileSize / 1000000,
                )}Mb. Acceptable file types .
              ${supportedFileTypes.join(", ")}.`}
            </p>
          </>
        )}

        {state === "loading" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="dropzone__loading-icon"
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

        {state === "success" && (
          <span className="dropzone__success-icon">{config.iconCheck()}</span>
        )}

        {message && <p className="dropzone__message">{message}</p>}
      </div>
    </>
  );
};

export default UploadField;
