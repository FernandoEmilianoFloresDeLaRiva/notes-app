import styles from "./FormNote.module.css";
import { Input } from "../../../../components/Input/Input";
import { useForm } from "react-hook-form";
import { CreateNoteT, RootState } from "../../../../entities/entity";
import { CreateNoteSchema } from "../../validator/CreateNote.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "../../../../components/TextArea/TextArea";
import { postNoteService } from "../../../../services/services/notes/createNote.service";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DashboardContext } from "../../Context/DashboardContext/DashboardContext";
import { DASHBOARD_NAMES } from "../../../../constants";

export const FormNote = () => {
  const { user, token } = useSelector((root: RootState) => root.auth);
  const { setDashboardName } = useContext(DashboardContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNoteT>({
    resolver: zodResolver(CreateNoteSchema),
  });

  const handleOnSubmit = async (data: CreateNoteT) => {
    try {
      const res = await postNoteService(user.id, data, token);
      console.log(res);
      setDashboardName(DASHBOARD_NAMES.SEE_ALL);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className={styles.mainFormContainer}>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={styles.formContainer}
      >
        <h1>Let's created a new note!</h1>
        <div className={styles.inputContainers}>
          <Input
            titleInput="Add the title of your note"
            text="Add the title of your note"
            config={register("title")}
            error={errors?.title?.message}
          />
          <TextArea
            titleTextArea="Add the description of your note"
            text="At least 8 characters..."
            config={register("description")}
            error={errors?.description?.message}
          />
        </div>
        <button className={styles.buttonLogIn}>Create a note</button>
      </form>
    </div>
  );
};
