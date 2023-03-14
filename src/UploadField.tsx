import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./uploadfield.scss";

type UploadFieldProps = {
  name: string;
  field: WorkableFormField;
};

export const UploadField: React.ComponentType<UploadFieldProps> = ({
  name,
  field,
}) => {
  const IS_IMAGE = Boolean(
    field.supported_file_types.filter((x) =>
      ["jpg", "jpeg", "gif", "png"].includes(x),
    ).length,
  );

  const [image, setImage] = useState<null | { preview: string; name: string }>(
    null,
  );
  const [fileBase64, setFileBase64] = useState<string>("");
  const { acceptedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: 12000000,
    accept: {
      "application/octet-stream": field.supported_file_types.map(
        (ext) => `.${ext}`,
      ),
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => {
          reset();
          console.log("file reading was aborted");
        };
        reader.onerror = () => {
          reset();
          console.log("file reading has failed");
        };
        reader.onload = () => {
          setFileBase64(reader.result.toString());
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
  };

  return (
    <>
      <button
        type="button"
        data-action="remove-entry"
        onClick={onClear}
        style={{ display: "none" }}
      />
      <div {...getRootProps({ className: "dropzone" })}>
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
              <span>Replace file</span> or drag and drop here
            </p>
          </>
        ) : (
          <>
            <p className="dropzone__label">
              <span>Upload a file</span> or drag and drop here
            </p>
            <p className="dropzone__info">
              Maximum file size 12Mb. Acceptable file types .
              {field.supported_file_types.join(", .")}.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default UploadField;
