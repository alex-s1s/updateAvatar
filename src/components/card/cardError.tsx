import Card from "./card";
import styles from "./index.module.scss";

import { BsExclamationLg } from "react-icons/bs";

type CardMessage = {
  message: any;
};

function CardError({ message }: CardMessage) {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <Card iconClose borderDashed="none">
        <div className={styles.gridPhoto}>
          <div className={styles.imageError}>
            <span>
              <BsExclamationLg />
            </span>
          </div>
        </div>
        <div className={styles.error}>
          <p>{message}</p>
          <button onClick={refreshPage}>Try again</button>
        </div>
      </Card>
    </div>
  );
}

export default CardError;
