import { useDispatch } from "react-redux";
import { store } from "../../redux/indexStore";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
