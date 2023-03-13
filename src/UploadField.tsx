import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

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

  const [images, setImages] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: 12000000,
    accept: {
      "application/octet-stream": field.supported_file_types.map(
        (ext) => `.${ext}`,
      ),
    },
    onDrop: (acceptedFiles) => {
      setImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => images.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />

      {acceptedFiles.length > 0 ? (
        <>
          {IS_IMAGE &&
            images.map((file) => (
              <img
                style={{
                  maxWidth: 240,
                }}
                key={file.name}
                src={file.preview}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            ))}
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
  );
};

export default UploadField;
