import { useSelector } from "react-redux";
import { createCategoryService } from "../../services/services/categories/postCategory.service";
import styles from "./CreateCategoryButton.module.css";
import Swal from "sweetalert2";
import { RootState } from "../../entities/entity";

export const CreateCategoryButton = () => {
  const { token } = useSelector((root: RootState) => root.auth);

  const handleCreateCategory = async (categoryName: string) => {
    const res = await createCategoryService(token, categoryName);
    console.log("New category name", categoryName);
    console.log(res);
  };

  const showCategoryAlert = () => {
    Swal.fire({
      title: "Enter the name of your category to create",
      input: "text",
      inputPlaceholder: "Category name",
      showCancelButton: true,
      confirmButtonText: "Create",
      cancelButtonText: "Cancel",
      preConfirm: (categoryName) => {
        if (!categoryName) {
          Swal.showValidationMessage("You must enter a name for the category");
        }
        return categoryName;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        handleCreateCategory(result.value);
      }
    });
  };

  return (
    <div>
      <span onClick={showCategoryAlert} className={styles.createCategory}>
        <i className="bi bi-bookmark-plus"></i>
        Create new category
      </span>
    </div>
  );
};
