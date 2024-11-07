import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthActions } from "../actions/auth.actions";
import { LoginUserT } from "../../../entities/entity";
import { loginUserService } from "../../../services/services/users/loginUser.service";
import {
  CreateLoginUserDTO,
  CreateTokenResponse,
} from "../../../entities/dtos";

export const loginUserAsync = createAsyncThunk(
  AuthActions.loginAuth,
  async (payload: LoginUserT) => {
    try {
      const loginUserDTO = new CreateLoginUserDTO(payload);
      const response = await loginUserService(loginUserDTO);
      const token = new CreateTokenResponse(response);
      return token;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error login user");
      throw new Error(error);
    }
  }
);
