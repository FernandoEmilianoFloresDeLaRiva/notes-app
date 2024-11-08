import React, { Dispatch, SetStateAction } from "react";
import styles from "./CategoryCheckBox.module.css";

interface Props {
  categoryId: number;
  categoryName: string;
  selectedCategories: number[];
  setSelectedCategories: Dispatch<SetStateAction<number[]>>;
}

const CategoryCheckbox: React.FC<Props> = ({
  categoryId,
  categoryName,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCheckboxChange = (id: number) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(id)) {
        return prevSelectedCategories.filter((categoryId) => categoryId !== id);
      } else {
        return [...prevSelectedCategories, id];
      }
    });
  };

  return (
    <label className={styles.categoryLabel}>
      <input
        type="checkbox"
        value={categoryId}
        onChange={() => handleCheckboxChange(categoryId)}
        checked={selectedCategories.includes(categoryId)}
        className={styles.customCheckbox}
      />
      {categoryName}
    </label>
  );
};

export default CategoryCheckbox;
