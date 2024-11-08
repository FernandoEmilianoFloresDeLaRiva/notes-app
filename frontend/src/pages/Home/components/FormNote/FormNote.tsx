import styles from "./FormNote.module.css";
import { Input } from "../../../../components/Input/Input";
import { useForm } from "react-hook-form";
import { CreateNoteT } from "../../../../entities/entity";
import { CreateNoteSchema } from "../../validator/CreateNote.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "../../../../components/TextArea/TextArea";
import { useContext } from "react";
import { DashboardContext } from "../../Context/DashboardContext/DashboardContext";
import { DASHBOARD_NAMES } from "../../../../constants";
import { useValueForNote } from "../../../../hooks/useValueForNote";

interface Props {
  titleForm: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleAction: (data: any) => void;
  token: string;
}

export const FormNote: React.FC<Props> = ({
  titleForm = "",
  handleAction,
  token,
}) => {
  const { setDashboardName } = useContext(DashboardContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateNoteT>({
    resolver: zodResolver(CreateNoteSchema),
  });

  useValueForNote(token, setValue);

  const handleOnSubmit = (data: CreateNoteT) => {
    handleAction(data);
    setDashboardName(DASHBOARD_NAMES.SEE_ALL);
  };

  return (
    <div className={styles.mainFormContainer}>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={styles.formContainer}
      >
        <h1>{titleForm}</h1>
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