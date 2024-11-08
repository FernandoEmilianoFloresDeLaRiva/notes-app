import { CreateCategoryResponse } from "../entities/dtos/CreateCategoryResponse.dto";
import { Category_NoteI } from "../entities/entity/Category_NoteI";

export const getCategoryNames = (
  categoryNotes: Category_NoteI[],
  categories: CreateCategoryResponse[]
): string[] => {
  return categoryNotes
    .map((note) => {
      const category = categories.find((cat) => cat.id === note.idCategory);
      return category ? category.category_name : null;
    })
    .filter((categoryName): categoryName is string => categoryName !== null);
};
