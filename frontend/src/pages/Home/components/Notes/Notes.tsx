import React from "react";
import styles from "./Notes.module.css";
import { DropdownBtn } from "../../../../components/DropdownBtn/DropdownBtn";
import { CreateCategoryResponse } from "../../../../entities/dtos/CreateCategoryResponse.dto";
import { Category_NoteI } from "../../../../entities/entity/Category_NoteI";
import { getCategoryNames } from "../../../../utils/getCategoriesName";

interface Props {
  title: string;
  description: string;
  idNote: number;
  createdAt: string;
  archive: number;
  categoryName: Category_NoteI[];
  categories: CreateCategoryResponse[];
}

export const Notes: React.FC<Props> = ({
  title = "Titulo articulo",
  description = "Descripcion articulo",
  idNote = 0,
  archive,
  createdAt = "Created at 2024/08/10",
  categoryName,
  categories,
}) => {
  // Filtrar para que saque nombre de categorias, se usara el nombre para hacer un #
  return (
    <article className={styles.container}>
      <DropdownBtn archive={archive} idNote={idNote} />
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
        <span className={styles.createdAt}>{createdAt}</span>
        <div className={styles.containerCategories}>
          {getCategoryNames(categoryName, categories).map((c) => (
            <span>#{c}</span>
          ))}
        </div>
    </article>
  );
};
