import styles from "./index.module.scss";
import { MdClose } from "react-icons/md";

type CardType = {
  borderDashed?: "none";
  children?: JSX.Element | JSX.Element[];
  img?: string;
  iconClose?: boolean;
  error?: boolean;
};

const Card = ({ borderDashed, iconClose, children }: CardType) => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="container" style={{ border: borderDashed }}>
      <div className={styles.gridContainer}>
        {children}
        {iconClose && (
          <MdClose className={styles.icon} size={25} onClick={refreshPage} />
        )}
      </div>
    </div>
  );
};

export default Card;
