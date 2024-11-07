export interface ITokenResponse {
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}
