import React from "react";
import styles from "./Notes.module.css";
import { DropdownBtn } from "../../../../components/DropdownBtn/DropdownBtn";

interface Props {
  title: string;
  description: string;
  idNote: number;
  createdAt: string;
  archive: number;
}

export const Notes: React.FC<Props> = ({
  title = "Titulo articulo",
  description = "Descripcion articulo",
  idNote = 0,
  archive,
  createdAt = "Created at 2024/08/10",
}) => {
  
  return (
    <article className={styles.container}>
      <DropdownBtn archive={archive} idNote={idNote} />
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
      <span className={styles.createdAt}>{createdAt}</span>
    </article>
  );
};
