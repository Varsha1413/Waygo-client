export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}
export interface IRegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface IRegisterFormData extends IRegisterPayload {
  confirmPassword: string;
}
