import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const useUpdate = () => {
    const [files, setFiles] = useState<any>([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () =>
            files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);

    return {
        getRootProps,
        getInputProps,
        setFiles,
        files,
    }
}

export default useUpdate