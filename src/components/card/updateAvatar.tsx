/* eslint-disable jsx-a11y/alt-text */
import { MdOutlineImage } from "react-icons/md";
import Card from "./card";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import EditAvatar from "./editAvatar";
import CardError from "./cardError";

function UpdateAvatar() {
  const [files, setFiles] = useState<any>([]);
  const [error, setErrors] = useState<{ error: boolean; message?: string }>({
    error: false,
    message: "",
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      setErrors({ error: false });
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            setErrors({ error: true, message: err.message });
          }
          if (err.code === "file-invalid-type") {
            setErrors({ error: true, message: err.message });
          }
        });
      });
    },
  });

  const thumbs = files.map((file: any) => (
    <div key={file?.name}>
      <div>
        <img />
        <EditAvatar img={file.preview} />
      </div>
    </div>
  ));

  useEffect(() => {
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card>
        <div {...getRootProps()} className={styles.body}>
          <input type="file" className={styles.body} {...getInputProps()} />
          <p>
            <MdOutlineImage /> Organization Logo
          </p>
          <p>Drop the image here or click to browse.</p>
        </div>
      </Card>
      {error?.error ? (
        <CardError message={error?.message} />
      ) : (
        <aside>{thumbs}</aside>
      )}
    </div>
  );
}

export default UpdateAvatar;
