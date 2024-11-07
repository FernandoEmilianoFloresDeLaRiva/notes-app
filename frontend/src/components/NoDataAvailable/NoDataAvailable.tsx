import React from "react";
import styles from "./NoDataAvailable.module.css";

interface Props {
  message: string;
}

export const NoDataAvailable: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
