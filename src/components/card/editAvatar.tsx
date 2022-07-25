import Card from "./card";
import styles from "./index.module.scss";
import { useState } from "react";
import { Cropper } from "react-cropper";
import ShowImage from "./showImage";

type Edit = {
  img: string;
};

function EditAvatar({ img }: Edit) {
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <Card iconClose borderDashed="none">
        <div className={styles.gridPhoto}>
          <Cropper
            initialAspectRatio={0}
            src={img}
            zoomOnWheel={true}
            viewMode={1}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
        </div>
        <div className={styles.bodyEdit}>
          <p>Crop</p>
          <button className={styles.buttonEdit} onClick={getCropData}>
            Save
          </button>
        </div>
      </Card>
      {cropData !== "#" && <ShowImage cropData={cropData} />}
    </div>
  );
}

export default EditAvatar;
