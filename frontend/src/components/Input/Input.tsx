import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.css";

interface Props {
  titleInput: string;
  text: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  config?: UseFormRegisterReturn;
}

export const Input: React.FC<Props> = ({
  text,
  type = "text",
  config,
  titleInput,
  error = "",
}) => {
  return (
    <div className={styles.containerInputs}>
      <label htmlFor={titleInput}>{titleInput}</label>
      <input
        id={titleInput}
        type={type}
        placeholder={text}
        className={styles.input}
        {...config}
      />
      {error !== "" && <p className={styles.error}>{error}</p>}
    </div>
  );
};
