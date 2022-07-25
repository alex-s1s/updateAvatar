import { MdOutlineImage } from "react-icons/md";
import Card from "./card";
import styles from "./index.module.scss";

function ShowImage(props: any) {
  return (
    <div>
      <Card iconClose>
        <div className={styles.gridPhoto}>
          <img src={props?.cropData} alt="" />
        </div>
        <div className={styles.body} style={{ width: "50%" }}>
          <p>
            <MdOutlineImage /> Organization Logo
          </p>
          <p>Drop the image here or click to browse.</p>
        </div>
      </Card>
    </div>
  );
}

export default ShowImage;
