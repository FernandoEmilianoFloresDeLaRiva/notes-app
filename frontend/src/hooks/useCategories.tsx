import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../pages/Home/Context/DashboardContext/DashboardContext";
import { RootState } from "../entities/entity";
import { useSelector } from "react-redux";
import { CreateCategoryResponse } from "../entities/dtos/CreateCategoryResponse.dto";
import { getAllCategoriesService } from "../services/services/categories/getAllCategories.service";

export const useCategories = () => {
  const [categories, setCategories] = useState<CreateCategoryResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { dashboardName } = useContext(DashboardContext);
  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    setIsLoading(true);
    getAllCategoriesService(token)
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dashboardName]);
  return { isLoading, categories };
};
