import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Input/Input";
import styles from "./RegisterForm.module.css";
import { CreateUserT } from "../../../../entities/entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema } from "../../validator/CreateUser.validator";
import { registerUserService } from "../../../../services/services/users/registerUser.service";
import { useLocation } from "wouter";

export const RegisterForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserT>({
    resolver: zodResolver(CreateUserSchema),
  });

  const handleOnSubmit = async (data: CreateUserT) => {
    try {
      await registerUserService(data);
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
        <h1>My Note Hub</h1>
        <div className={styles.inputContainers}>
          <Input
            titleInput="Your Username"
            text="username"
            config={register("username")}
            error={errors?.username?.message}
          />
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
        <button className={styles.buttonLogIn} type="submit">
          Register
        </button>
        <div className={styles.containerSignUp}>
          <span>Already have an account?</span>
          <button
            onClick={() => {
              setLocation("/");
            }}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
