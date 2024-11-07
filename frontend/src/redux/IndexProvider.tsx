import { Provider } from "react-redux";
import { store } from "./indexStore";
import { IndexRouter } from "../router/IndexRouter";

export const IndexProvider = () => {
  return (
    <Provider store={store}>
      <IndexRouter />
    </Provider>
  );
};
