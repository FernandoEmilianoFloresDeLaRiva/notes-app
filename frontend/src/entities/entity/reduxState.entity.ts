import { store } from "../../redux/indexStore";

export type RootState = ReturnType<typeof store.getState>;
