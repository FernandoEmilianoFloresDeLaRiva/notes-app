import react from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Input/Input";
import styles from "./Form.module.css";
import { LoginUserT } from "../../../../entities/entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserSchema } from "../../validator/LoginUser.validator";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserT>({
    resolver: zodResolver(LoginUserSchema),
  });

  const imprimir = async (data: LoginUserT) => {
    console.log(data);
  };
  return (
    <div className={styles.mainFormContainer}>
      <form onSubmit={handleSubmit(imprimir)} className={styles.formContainer}>
        <h1>My Note Hub</h1>
        <div className={styles.inputContainers}>
          <Input
            titleInput="Your Email"
            text="email@gmail.com"
            config={register("email")}
            type="email"
            error={errors?.email?.message}
          />
          <Input
            type="password"
            titleInput="Your Password"
            text="At least 8 characters"
            config={register("password")}
            error={errors?.password?.message}
          />
        </div>
        <button className={styles.buttonLogIn}>Log In</button>
      </form>
    </div>
  );
};
