import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./TextArea.module.css";

interface Props {
  titleTextArea: string;
  text: string;
  error?: string;
  config?: UseFormRegisterReturn;
}

export const TextArea: React.FC<Props> = ({
  text,
  config,
  titleTextArea,
  error = "",
}) => {
  return (
    <div className={styles.containerTextArea}>
      <label htmlFor={titleTextArea}>{titleTextArea}</label>
      <textarea
        id={titleTextArea}
        placeholder={text}
        className={styles.textArea}
        {...config}
      />
      {error !== "" && <p className={styles.error}>{error}</p>}
    </div>
  );
};
