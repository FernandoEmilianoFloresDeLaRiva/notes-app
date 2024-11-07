import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Input/Input";
import styles from "./Form.module.css";
import { LoginUserT, useAppDispatch } from "../../../../entities/entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserSchema } from "../../validator/LoginUser.validator";
import { loginUserAsync } from "../../../../redux/Auth/thunks/loginUser.async";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserT>({
    resolver: zodResolver(LoginUserSchema),
  });

  const dispatch = useAppDispatch();

  const handleOnSubmit = async (data: LoginUserT) => {
    const res = await dispatch(loginUserAsync(data));
    console.log(res)
    // const statusRedux = getStatusActionRedux(res?.type);
    // setStatusActionRedux(statusRedux);
    // setError(res);
  };
  return (
    <div className={styles.mainFormContainer}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.formContainer}>
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
