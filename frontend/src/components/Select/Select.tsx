import React, { Dispatch, SetStateAction } from "react";
import { CreateCategoryResponse } from "../../entities/dtos/CreateCategoryResponse.dto";
import styles from "./Select.module.css";

interface Props {
  categories: CreateCategoryResponse[];
  setCategory: Dispatch<SetStateAction<number>>;
}

export const Select: React.FC<Props> = ({ categories, setCategory }) => {
  return (
    <select
      name="category-select"
      id="category-select"
      className={styles.selectContainer}
      onChange={(e) => {
        const selectedCategoryId = Number(e.target.value);
        setCategory(selectedCategoryId);
      }}
    >
      <option value={0}>All notes</option>
      {categories.map((c) => {
        return (
          <option key={c.id} value={c.id}>
            {c.category_name}
          </option>
        );
      })}
    </select>
  );
};
